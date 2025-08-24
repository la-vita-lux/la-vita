import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import LaVitaHomepage from "@/app/page"
import ThreeDView from "@/components/sections/ThreeDView"
import InsideLights from "../components/sections/InsideLights"

export default function App() {
  const basename = (() => {
    if (typeof window === 'undefined') return '/'
    const segments = window.location.pathname.split('/').filter(Boolean)
    // If hosted at https://<user>.github.io/<repo>/..., use '/<repo>' as basename
    return segments.length > 0 ? `/${segments[0]}` : '/'
  })()

  return (
    <BrowserRouter basename={basename}>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LaVitaHomepage />} />
        <Route path="/3d-view" element={<ThreeDView />} />
        <Route path="/inside-lights" element={<InsideLights />} />
        <Route path="*" element={<LaVitaHomepage />} />
      </Routes>
    </BrowserRouter>
  )
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, location.hash])

  return null
}

