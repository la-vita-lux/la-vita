import React, { useState } from "react"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ThreeDView() {
  const units = [
    {
      id: "C",
      title: "C Unit (两房)",
      url: "https://vr.justeasy.cn/view/61a783hj16i17458-1732865087.html",
      thumbnail: "/images/thumbnails/C-inside-light.png",
    },
    {
      id: "K",
      title: "K Unit (一房)",
      url: "https://vr.justeasy.cn/view/1k3w7731u6146656-1732865148.html",
      thumbnail: "/images/thumbnails/K-inside-light.png",
    },
    {
      id: "F",
      title: "F Unit (一房)",
      url: "https://vr.justeasy.cn/view/1z7283qj864269u2-1731522371.html",
      thumbnail: "/images/thumbnails/F-inside-light.png",
    },
    {
      id: "A",
      title: "A Unit (Studio)",
      url: "https://vr.justeasy.cn/view/16v73176114b5697-1733507443.html",
      thumbnail: "/images/thumbnails/A-inside-light.png",
    },
  ] as const

  function UnitCard({ title, url, thumbnail }: { title: string; url: string; thumbnail: string }) {
    const [isOpen, setIsOpen] = useState(false)
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
            aria-label={`Open 3D modal for ${title}`}
          >
            <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = "/images/lavita-logo.png"
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-black shadow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-sm font-medium">查看大图</span>
              </div>
            </div>
          </button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[90vw] w-[90vw] max-w-[1200px] p-3">
            <DialogHeader className="mb-1">
              <DialogTitle className="flex items-center justify-between gap-3">
                <span className="truncate font-normal text-base" title={title}>{title}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="w-full relative" style={{ height: "70vh" }}>
              <img
                src={thumbnail}
                alt={`${title} preview`}
                className="w-full h-full object-contain bg-black rounded"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = "/images/lavita-logo.png"
                }}
              />
              <div className="absolute inset-0 bg-black/50 rounded" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white/95 px-5 py-2.5 text-black shadow hover:bg-white"
                >
                  在新标签页打开 3D
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1
            className="mb-2 font-normal text-2xl"
            style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
          >
            3D 户型图
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            {units.map((u) => (
              <UnitCard key={u.id} title={u.title} url={u.url} thumbnail={u.thumbnail} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

