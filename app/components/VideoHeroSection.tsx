"use client";

import { useState, useEffect } from 'react'

export default function VideoHeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Return null on server-side to avoid hydration mismatch
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
      >
        <source src="/Video/indesta_hero2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Įgyvendiname žmonių norus ir svajones
          </h1>
          <p className="mb-8 text-lg sm:text-xl md:text-2xl">
          Karkasinių namų ir kitų medinių konstrukcijų statyba, renovacija, apdaila.
          </p>
          <button className="rounded bg-white px-6 py-2 font-semibold text-black transition-colors hover:bg-gray-200">
            Apie mus
          </button>
        </div>
      </div>
    </div>
  )
}