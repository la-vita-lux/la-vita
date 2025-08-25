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
          {/* Block 2: heading + paragraph + collage, side-by-side on desktop (image left, text right) */}
          <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-8">
            <div className="md:flex-1 mb-6 md:mb-0 md:self-center">
              <h3 className="mb-3 text-xl md:text-2xl font-semibold" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
                当设计融汇传统
              </h3>
              <div className="text-base md:text-lg leading-relaxed max-w-md">
                <p className="mb-2 text-black">汲取社区璀璨文化的灵感</p>
                <p className="mb-2 text-black">融合现代高端美学</p>
                <p className="mb-2 text-black">La Vita 打造出独一无二的尊贵生活体验</p>
                <p className="mb-2 text-black">150 套单位配备 16,000 平方英尺的奢华设施</p>
                <p className="mb-2 text-black">以现代设计理念融入文化精髓</p>
                <p className="text-black">呈现非凡居住格调</p>
              </div>
            </div>

            {/* Image grid: similar sizing as Lifestyle, no overflow, moderate height */}
            <div className="w-full md:w-[52%] mt-2 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="/images/detail-3.png"
                alt="Stone wall texture detail"
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-md"
              />
              <img
                src="/images/detail-2.png"
                alt="Marble reception detail"
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-md"
              />
              <img
                src="/images/detail-1.png"
                alt="Lobby lighting sculpture"
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

