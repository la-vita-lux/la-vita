import React from "react"

export default function Residences() {
  return (
    <section id="residences" className="min-h-screen bg-\[#c6c6c6\] relative z-10">
      <div className="grid lg:grid-cols-7 min-h-[80vh]">
        
        <div className="lg:col-span-2 flex flex-col justify-center px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight ml-0" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)"  }}>
              灵动空间
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight ml-6 md:ml-10" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)"  }}>
              自然呼吸
            </h3>
            <h4 className="text-3xl md:text-4xl font-bold mb-6 leading-tight ml-12 md:ml-20" style={{ color: "#561616", textShadow: "1px 1px 2px rgba(0,0,0,0.2)"  }}>
              惊艳非凡
            </h4>
          </div>

          <div className="text-sm text-gray-700 leading-relaxed max-w-xs">
            <p className="mb-3">La Vita 提供从Studio到三居的多种户型选择 众多户型配备私享阳 四季皆可畅享室内外生活</p>
            <p className="mb-3">无论是款待宾客，度过浪漫夜晚，还是体验 至臻奢华，皆能在此完美实现</p>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <img
            src="/images/kitchen-interior.jpeg"
            alt="8F Elevation Kitchen Side - Luxury Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 min-h-[50vh]">
        <div className="relative">
          <img
            src="/images/living-room-interior.jpeg"
            alt="8F Elevation Living Room Side - Modern Interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative">
          <img
            src="/images/living-room-interior.jpeg"
            alt="8F Elevation Living Room Detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-40 flex flex-col justify-center px-6">
            <div className="text-sm text-gray-700 leading-relaxed">
              <p className="mb-3">让光影自由流淌,尽揽窗外美景 白色橡木鱼骨纹拼接地板 散发温润质感巧妙</p>
              <p className="mb-3">平衡光滑的石材表面与精致的镍质点缀精 心雕琢的细节融入低调雅致的配色 打造 和谐且富有层次感的空间美学</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

