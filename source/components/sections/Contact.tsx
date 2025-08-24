import React from "react"

export default function Contact() {
  return (
    <section id="contact" className="h-[75vh] bg-gradient-to-b from-[#59050c] to-[#2a0d0e] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* section 1 */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#efd88f" }}>
            133-25 37th Ave Flushing, NY, 11354
          </h2>
          <div className="text-lg mb-8" style={{ color: "#efd88f" }}>
            <p>LAVITA.NYC / 001-929-919-7977 / INFO@LAVITA.NYC</p>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-wrap justify-center gap-24 mt-5">
          <div className="text-center">
            <img src="/images/wechat-qr.png" alt="WeChat QR Code" className="w-32 h-32 mx-auto mb-4" />
            <p className="text-sm font-medium" style={{ color: "#efd88f" }}>WECHAT</p>
          </div>
          <div className="text-center">
            <img src="/images/xiaohongshu-qr.png" alt="Xiaohongshu QR Code" className="w-32 h-32 mx-auto mb-4" />
            <p className="text-sm font-medium" style={{ color: "#efd88f" }}>LAVITA.NYC</p>
          </div>
          {/* <div className="text-center">
            <img src="/images/instagram-qr.png" alt="Instagram QR Code" className="w-32 h-32 mx-auto mb-4" />
            <p className="text-sm font-medium" style={{ color: "#efd88f" }}>INSTAGRAM</p>
          </div>
          <div className="text-center">
            <img src="/images/facebook-qr.png" alt="Facebook QR Code" className="w-32 h-32 mx-auto mb-4" />
            <p className="text-sm font-medium" style={{ color: "#efd88f" }}>FACEBOOK</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

