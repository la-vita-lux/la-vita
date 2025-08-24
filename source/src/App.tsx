import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import LaVitaHomepage from "@/app/page"
import ThreeDView from "@/components/sections/ThreeDView"
import InsideLights from "../components/sections/InsideLights"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LaVitaHomepage />} />
        <Route path="/3d-view" element={<ThreeDView />} />
        <Route path="/inside-lights" element={<InsideLights />} />
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

