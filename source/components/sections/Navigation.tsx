"use client"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

type NavigationProps = {
  transparent?: boolean
}

export default function Navigation({ transparent = false }: NavigationProps) {
  const [open, setOpen] = React.useState(false)
  const [openedByClick, setOpenedByClick] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  function handleHomeHashNavigate(hash: string) {
    if (location.pathname !== "/") {
      navigate(`/${hash}`)
    } else {
      // already on home, use in-page navigation
      window.location.hash = hash
    }
  }

  React.useEffect(() => {
    // close mobile menu on route or hash change
    setMobileOpen(false)
  }, [location])
  return (
    <nav className={`fixed top-0 w-full ${transparent ? "bg-transparent" : "bg-background/95"} backdrop-blur-sm border-b border-border z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <a href="/#home" className="text-xl hover:text-amber-500 transition-colors" style={{ color: "#561616" }}>
              LA VITA
            </a>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#home') }} href="/#home" className="hover:text-amber-500 transition-colors" style={{ color: "#561616" }}>
              Home
            </a>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#building') }} href="/#building" className="hover:text-amber-500 transition-colors" style={{ color: "#561616" }}>
              Building
            </a>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#residences') }} href="/#residences" className="hover:text-amber-500 transition-colors" style={{ color: "#561616" }}>
              Residences
            </a>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#lifestyle') }} href="/#lifestyle" className="hover:text-amber-500 transition-colors" style={{ color: "#561616" }}>
              Lifestyle
            </a>
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => {
                if (!openedByClick) setOpen(false)
              }}
              className="relative"
            >
              <DropdownMenu
                open={open}
                onOpenChange={(next) => {
                  setOpen(next)
                  if (!next) setOpenedByClick(false)
                }}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    onClick={() => setOpenedByClick(true)}
                    className="hover:text-amber-500 transition-colors cursor-pointer"
                    style={{ color: "#561616" }}
                  >
                    Explore
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={8}
                  onMouseEnter={() => setOpen(true)}
                >
                  <DropdownMenuItem asChild className="hover:bg-[#faece2] focus:bg-[#faece2] text-black hover:text-black focus:text-black">
                    <a href="/3d-view" className="w-full text-black">
                      3D Views
                    </a>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem asChild className="hover:bg-[#faece2] focus:bg-[#faece2] text-black hover:text-black focus:text-black">
                    <a href="/inside-lights" className="w-full text-black">
                      单元户型图
                    </a>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#contact') }} href="/#contact" className="hover:text-amber-500 transition-colors" style={{ color: "#561616" }}>
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-md hover:bg-[#faece2]/60 focus:outline-none focus:ring-2 focus:ring-[#561616]/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: '#561616' }}
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className={`${transparent ? 'bg-background/95' : 'bg-background/95'} border-b border-border md:hidden fixed top-16 left-0 right-0 z-40`}> 
          <div className="px-4 py-3 space-y-2">
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#home') }} href="/#home" className="block py-2 text-base hover:text-amber-500" style={{ color: "#561616" }}>
              Home
            </a>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#building') }} href="/#building" className="block py-2 text-base hover:text-amber-500" style={{ color: "#561616" }}>
              Building
            </a>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#residences') }} href="/#residences" className="block py-2 text-base hover:text-amber-500" style={{ color: "#561616" }}>
              Residences
            </a>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#lifestyle') }} href="/#lifestyle" className="block py-2 text-base hover:text-amber-500" style={{ color: "#561616" }}>
              Lifestyle
            </a>
            <div className="pt-2">
              <div className="text-sm uppercase tracking-wide mb-1" style={{ color: '#561616' }}>Explore</div>
              <a href="/3d-view" className="block py-2 pl-3 text-base hover:text-amber-500" style={{ color: "#561616" }}>
                3D Views
              </a>
              {/* <a href="/inside-lights" className="block py-2 pl-3 text-base hover:text-amber-500" style={{ color: "#561616" }}>
                单元户型图
              </a> */}
            </div>
            <a onClick={(e) => { e.preventDefault(); handleHomeHashNavigate('#contact') }} href="/#contact" className="block py-2 text-base hover:text-amber-500" style={{ color: "#561616" }}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

