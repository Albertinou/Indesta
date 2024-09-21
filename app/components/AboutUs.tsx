'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Apie mus
        </h2>
        <div className="mt-6 text-xl text-gray-500 space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Maecenas sed ipsum ut felis congue commodo. Sed quis mauris vitae tortor mollis volutpat. Morbi in dui quis est pulvinar ullamcorper.
          </p>
        </div>
      </motion.div>
    </section>
  )
}