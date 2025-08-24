import React from "react"

export default function BuildingOverview() {
  return (
    <section id="building" className="py-0">
      <div className="grid lg:grid-cols-2">
        <div className="lg:col-span-1 relative">
            <img
              src="/images/la-vita-hero-shot.png"
              alt="La Vita Building Rendering"
              className="block w-full h-full object-cover"
            />
        </div>

        <div className="lg:col-span-1 flex flex-col justify-between px-8 pt-0 pb-8 relative" style={{ backgroundColor: "#f9ece2" }}>
          <div className="flex gap-10 md:gap-12 relative">
            <div className="relative">
              <div
                className="text-6xl md:text-7xl font-bold writing-mode-vertical-rl text-orientation-mixed relative z-10"
                style={{ color: "#561616", textShadow: "2px 2px 4px rgba(0,0,0,0.3)", marginTop: "60px" }}
              >
                奢华与品味共融
              </div>
            </div>

            <div className="relative">
              <div
                className="text-6xl md:text-7xl font-bold writing-mode-vertical-rl text-orientation-mixed relative z-10"
                style={{ color: "#561616", textShadow: "2px 2px 4px rgba(0,0,0,0.3)", marginTop: "140px" }}
              >
                开启非凡新境界
              </div>
            </div>
          </div>

          <div className="text-sm leading-relaxed max-w-[14rem] sm:max-w-xs self-end mt-8 md:mt-0 relative z-10">
            <p className="mb-2 font-medium" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
              引领法拉盛的高端生活新体验
            </p>
            <p className="mb-2 text-black">隆重推出 La Vita</p>
            <p className="mb-2 text-black">建筑、设计与生活方式的期待已久的革新</p>
            <p className="mb-2 text-black">坐落于皇后区最充满活力的社区之一</p>
            <p className="text-black">La Vita 正在书写法拉盛市中心发展的崭新篇章</p>
          </div>
        </div>
      </div>
    </section>
  )
}

