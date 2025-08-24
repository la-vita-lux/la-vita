import React from "react"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background building image with subtle transparency */}
      <img
        src="/images/la-vita-hero-shot.png"
        alt="La Vita Building Rendering"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Center logo */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
        <img src="/images/lavita-logo.png" alt="La Vita Condominium Logo" className="w-56 md:w-72 lg:w-80 mb-8" />

        {/* Taglines moved to caption title below */}
      </div>

      {/* Bottom-left full caption block */}
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 z-10 max-w-xs sm:max-w-sm text-sm md:text-base leading-relaxed" style={{ color: '#faece2' }}>
        <div className="mb-3 text-2xl md:text-3xl font-bold" style={{ color: '#d09e66', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          奢华与品味共融
        </div>
        <div className="mb-3 text-2xl md:text-3xl font-bold" style={{ color: '#d09e66', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          开启非凡新境界
        </div>
        <p className="mb-2 font-medium">引领法拉盛的高端生活新体验</p>
        <p className="mb-2">隆重推出 La Vita</p>
        <p className="mb-2">建筑、设计与生活方式的期待已久的革新</p>
        <p className="mb-2">坐落于皇后区最充满活力的社区之一</p>
        <p>La Vita 正在书写法拉盛市中心发展的崭新篇章</p>
      </div>
    </section>
  )
}

