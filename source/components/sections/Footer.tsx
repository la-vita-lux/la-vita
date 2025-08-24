import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b text-white py-16" style={{ backgroundColor: "#2a0c0d" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl text-amber-400" style={{ color: "#caa458" }}>La Vita</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">奢华与品味共融，开启非凡新境界</p>
            <p className="text-slate-400 text-xs">133-25 37th Ave, Flushing, NY 11354</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">联系我们</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>LAVITA.NYC</p>
              <p>001-929-919-7977</p>
              <p>INFO@LAVITA.NYC</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <span className="text-xs text-slate-400">WeChat: LAVITA.NYC</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">独家销售与营销</h3>
            <div className="bg-white p-4 rounded-lg inline-block">
              <img src="/images/pro-links-logo.png" alt="PRO Links Realty" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 text-xs">Exclusive Sales and Marketing by PRO Links Realty</p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">© 2024 La Vita Condominium. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Equal Housing Opportunity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

