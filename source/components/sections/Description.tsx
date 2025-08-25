import React from "react"

export default function Description() {
  return (
    <section className="min-h-[120vh] md:h-screen bg-white relative overflow-hidden">
      <div className="grid lg:grid-cols-2 h-full">
        <div className="lg:col-span-1 relative h-full">
          <img
            src="/images/facde-1.jpg"
            alt="Facade 1 - La Vita Architectural Detail"
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="lg:col-span-1 flex flex-col justify-center px-8 py-16 bg-stone-50">
          {/* Block 2: heading + paragraph only (no images) */}
          <div className="flex flex-col md:items-center md:gap-8">
            <div className="md:flex-1 mb-6 md:mb-0 md:self-center">
              <h3 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
                当设计融汇传统
              </h3>
              <div className="text-lg md:text-xl leading-relaxed max-w-2xl">
                <p className="mb-2 text-black">汲取社区璀璨文化的灵感</p>
                <p className="mb-2 text-black">融合现代高端美学</p>
                <p className="mb-2 text-black">La Vita 打造出独一无二的尊贵生活体验</p>
                <p className="mb-2 text-black">150 套单位配备 16,000 平方英尺的奢华设施</p>
                <p className="mb-2 text-black">以现代设计理念融入文化精髓</p>
                <p className="text-black">呈现非凡居住格调</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

