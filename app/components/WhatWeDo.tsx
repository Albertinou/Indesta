"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const cards = [
  {
    
    description: "Karkasinių namų statyba su vidaus apdaila (nuo A iki Z)",
    image: "/Images/WhatWeDo/pilnas_namas.jpg",
  },
  {
    
    description: "Karkasinių namų statyba su daline apdaila",
    image: "/Images/WhatWeDo/daline.jpg",
  },
  {
    
    description: "Karkasinių garažų, pirčių statyba",
    image: "/Images/WhatWeDo/garazas.jpg",
  },
  {
    
    description: "Stogo konstrukcijų įrengimas ir montavimas",
    image: "/Images/WhatWeDo/stogas.jpg",
  },
  {
    // title: "some title",
    description: "Terasų, pastogių įrengimas",
    image: "/Images/WhatWeDo/pastoge.jpg",
  },
]

export default function WhatWeDo() {
    const [inView, setInView] = useState(false)
    const ref = useRef(null)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        },
        {
          threshold: 0.1,
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
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-start">Mūsų paslaugos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.description}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-0">
                    <Image
                      src={card.image}
                      alt={card.description}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      {/* <h3 className="text-lg font-semibold mb-2">{card.title}</h3> */}
                      <p className="text-lg text-gray-600">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }