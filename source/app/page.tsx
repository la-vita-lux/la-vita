import React from "react"
import Navigation from "@/components/sections/Navigation"
import Hero from "@/components/sections/Hero"
import Description from "@/components/sections/Description"
import DescriptionIntro from "@/components/sections/DescriptionIntro"
import Residences from "@/components/sections/Residences"
import Lifestyle from "@/components/sections/Lifestyle"
import Location from "@/components/sections/Location"
import GalleryFull from "@/components/sections/GalleryFull"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function LaVitaHomepage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DescriptionIntro />
      <Description />
      <Residences />
      <Lifestyle />
      <Location />
      <GalleryFull />
      <Contact />
      <Footer />
    </div>
  )
}

