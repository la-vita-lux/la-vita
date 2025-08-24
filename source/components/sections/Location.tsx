import React from "react"
import { MapPin } from "lucide-react"

export default function Location() {
  return (
    <section id="location" className="min-h-screen md:h-screen md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#561616" }}>
              卓越地理位置，畅享繁华生活
            </h2>
            <div className="space-y-3 text-base leading-relaxed text-gray-800">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span>坐落于法拉盛，充满活力的社区，餐饮与购物选择丰富多元</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span>紧邻 Tangram 商业区，云集顶级餐厅、酒吧、咖啡馆与精品商店</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span>步行可达主街 Main Street、Skyview 购物中心、新世界商城与 H Mart 超市</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span>便捷公共交通：本地巴士、7 号地铁线与 LIRR 轻轨，出行高效</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span>约 20 分钟车程直达拉瓜迪亚机场 LaGuardia Airport</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span>邻近花旗球场、USTA 网球中心、皇后植物园与法拉盛草原可乐娜公园</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/images/8k-living-room-2.jpeg" alt="Living Room" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

