import React, { useMemo, useState } from "react"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type InsideImage = {
  fileName: string
  url: string
  units: string[]
}

function parseUnitsFromFileName(fileName: string): string[] {
  const withoutExt = fileName.replace(/\.png$/i, "")
  const withoutSuffix = withoutExt
    .replace(/_inside-light$/i, "")
    .replace(/_iniside-light$/i, "") // handle possible typo variant

  // Extract leading letters as the code, then optional separator, then remainder
  const match = withoutSuffix.match(/^([A-Z]+)(?:[_-])?(.*)$/i)
  if (!match) return [withoutSuffix]

  const code = match[1].toUpperCase()
  const remainder = (match[2] || "").trim()

  // If no remainder, this is a single unit like PHA/PHB/etc.
  if (!remainder) return [code]

  // If remainder contains any letters (e.g., PHFloor), treat as a single label
  if (/[A-Za-z]/.test(remainder) && !/^\d/.test(remainder)) {
    return [`${code} ${remainder}`]
  }

  // Parse numeric list with ranges, e.g. "5,7-8,10-11,15-16,18"
  const parts = remainder.split(",").map((p) => p.trim()).filter(Boolean)
  const units: string[] = []
  for (const part of parts) {
    if (/^\d+\s*-\s*\d+$/.test(part)) {
      const [startStr, endStr] = part.split("-").map((s) => s.trim())
      const start = parseInt(startStr, 10)
      const end = parseInt(endStr, 10)
      if (!Number.isNaN(start) && !Number.isNaN(end)) {
        const [lo, hi] = start <= end ? [start, end] : [end, start]
        for (let n = lo; n <= hi; n++) {
          units.push(`${code}${n}`)
        }
      }
    } else if (/^\d+$/.test(part)) {
      const n = parseInt(part, 10)
      if (!Number.isNaN(n)) units.push(`${code}${n}`)
    } else {
      // Fallback unknown token
      units.push(`${code}${part}`)
    }
  }
  return units.length ? units : [code]
}

const insideImageFileNames: string[] = [
  "A_3,5-6,8-10,12,16-17_inside-light.png",
  "A_7,11,15,18_inside-light.png",
  "B_3,5,7-8,10-11,15,17-18_inside-light.png",
  "B_6,9,12,16_inside-light.png",
  "C_3_inside-light.png",
  "C_5,7-8,10-11,15-16,18_inside-light.png",
  "C_6,9,12,17_inside-light.png",
  "D_3_inside-light.png",
  "D_5-6,8-10,12,16-17_inside-light.png",
  "D_7,11,15,18_inside-light.png",
  "E_3_inside-light.png",
  "E_5-7,9-12,15,17,18_inside-light.png",
  "E_8,16_inside-light.png",
  "F_3_inside-light.png",
  "F_5,7-9,11-12,16,18_inside-light.png",
  "F_6,10,15,17_inside-light.png",
  "G_3,5-11_inside-light.png",
  "G_12_inside-light.png",
  "G_15,17_inside-light.png",
  "G_16,18_inside-light.png",
  "H_12_inside-light.png",
  "H_15-18_inside-light.png",
  "J_12_inside-light.png",
  "J_15-18_inside-light.png",
  "K_3,5-11_inside-light.png",
  "K_12_inside-light.png",
  "K_15,17_inside-light.png",
  "K_16,18_inside-light.png",
  "L_3,5,7-9,11-12,16,18_inside-light.png",
  "L_6,10,15,17_inside-light.png",
  "M_3,6,7,9-12,15,17,18_inside-light.png",
  "M_5,8,16_inside-light.png",
  "PHA_inside-light.png",
  "PHB_inside-light.png",
  "PHD_inside-light.png",
  "PHE_inside-light.png",
  "PHF_inside-light.png",
  "PHG_inside-light.png",
  "PHJ_inside-light.png",
  "PHK_inside-light.png",
  "PHL_inside-light.png",
  "PHM_inside-light.png",
]

function buildInsideImages(): InsideImage[] {
  return insideImageFileNames.map((fileName) => {
    return {
      fileName,
      url: `/images/inside-lights/${fileName}`,
      units: parseUnitsFromFileName(fileName),
    }
  })
}

function unitSortKey(unit: string): [string, number, string] {
  const match = unit.match(/^([A-Za-z]+)\s*(\d+)?/)
  const prefix = (match?.[1] || unit).toUpperCase()
  const num = match?.[2] ? parseInt(match[2], 10) : Number.POSITIVE_INFINITY
  return [prefix, num, unit]
}

function compareImagesByUnit(a: InsideImage, b: InsideImage): number {
  const minKey = (units: string[]) =>
    units
      .map((u) => unitSortKey(u))
      .sort((k1, k2) =>
        k1[0] === k2[0]
          ? k1[1] === k2[1]
            ? k1[2].localeCompare(k2[2])
            : k1[1] - k2[1]
          : k1[0].localeCompare(k2[0])
      )[0]

  const ka = minKey(a.units)
  const kb = minKey(b.units)
  if (ka[0] !== kb[0]) return ka[0].localeCompare(kb[0])
  if (ka[1] !== kb[1]) return ka[1] - kb[1]
  if (ka[2] !== kb[2]) return ka[2].localeCompare(kb[2])
  return a.fileName.localeCompare(b.fileName)
}

function ImageCard({ image }: { image: InsideImage }) {
  const [isOpen, setIsOpen] = useState(false)
  const title = image.units.join(", ")
  return (
    <div className="rounded-lg border border-white/20 bg-white/5 shadow-md overflow-hidden">
      <div className="p-4 border-b border-white/10 flex items-center justify-between gap-3">
        <h2 className="text-base font-normal truncate" title={title}>{title}</h2>
      </div>
      <div className="aspect-video w-full bg-black/30 text-slate-200">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative w-full h-full group"
          aria-label={`Open image modal for ${title}`}
        >
          <img
            src={image.url}
            alt={image.fileName}
            className="absolute inset-0 w-full h-full object-contain bg-black"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[95vw] w-[95vw] max-w-[1400px] p-3">
          <DialogHeader className="mb-1">
            <DialogTitle className="flex items-center justify-between gap-3">
              <span className="truncate font-normal text-base" title={title}>{title}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="w-full" style={{ maxHeight: "80vh" }}>
            <img
              src={image.url}
              alt={image.fileName}
              className="w-full h-full object-contain bg-black rounded"
              loading="lazy"
              decoding="async"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default function InsideLights() {
  const images = useMemo(() => buildInsideImages().sort(compareImagesByUnit), [])
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1
            className="mb-2 font-normal text-2xl"
            style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
          >
            单元户型图
          </h1>
          <p className="text-muted-foreground mb-6">点击图片可查看大图</p>

          <div className="grid gap-8 md:grid-cols-3">
            {images.map((img) => (
              <ImageCard key={img.fileName} image={img} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

