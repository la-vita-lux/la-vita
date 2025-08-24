import { NextRequest } from "next/server"
import path from "path"
import { readFile, stat } from "fs/promises"

const IMAGES_DIR = path.join(process.cwd(), "build", "images")

function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case ".png":
      return "image/png"
    case ".jpg":
    case ".jpeg":
      return "image/jpeg"
    case ".webp":
      return "image/webp"
    case ".gif":
      return "image/gif"
    case ".svg":
      return "image/svg+xml"
    case ".avif":
      return "image/avif"
    default:
      return "application/octet-stream"
  }
}

export async function GET(_req: NextRequest, context: { params: { path: string[] } }) {
  try {
    const segments = context.params.path || []
    const unsafe = path.join(...segments)
    const absolute = path.join(IMAGES_DIR, unsafe)

    // Prevent path traversal; ensure the resolved path is within IMAGES_DIR
    const normalizedBase = path.normalize(IMAGES_DIR + path.sep)
    const normalizedTarget = path.normalize(absolute)
    if (!normalizedTarget.startsWith(normalizedBase)) {
      return new Response("Not found", { status: 404 })
    }

    const fileStat = await stat(absolute)
    if (!fileStat.isFile()) {
      return new Response("Not found", { status: 404 })
    }

    const data = await readFile(absolute)
    const contentType = getContentType(absolute)

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch {
    return new Response("Not found", { status: 404 })
  }
}

