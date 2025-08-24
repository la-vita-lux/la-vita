import React from "react"

export default function DescriptionIntro() {
  return (
    <section className="h-screen bg-white">
      <div className="grid lg:grid-cols-2 h-full">
        {/* Left: text content larger */}
        <div className="lg:col-span-1 flex items-center justify-center px-8 py-16 bg-stone-50">
          <div className="max-w-md">
            <h3 className="mb-4 text-2xl md:text-3xl font-semibold" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
              创新永恒地标，奢华非凡典范
            </h3>
            <div className="text-base md:text-lg leading-relaxed">
              <p className="mb-3 text-black">作为无可比拟的奢华典范</p>
              <p className="mb-3 text-black">LaVita独树一帜</p>
              <p className="mb-3 text-black">将成为法拉盛中心顶级住宅地标其立面设计</p>
              <p className="mb-3 text-black">彰显现代美学</p>
              <p className="mb-3 text-black">层叠式阳台与列柱式基座相辅相成</p>
              <p className="mb-3 text-black">营造出空中花园的既视感</p>
              <p className="text-black">在光影交错间展现出变幻无穷的魅力</p>
            </div>
          </div>
        </div>

        {/* Right: full-height image mirroring facade layout */}
        <div className="lg:col-span-1 relative h-full">
          <img
            src="/images/window-light.png"
            alt="Window light architectural detail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

