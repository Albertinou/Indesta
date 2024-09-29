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
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Apie mus
        </h2>
        <div className="mt-6 text-xl text-gray-500 space-y-6">
          <p>&nbsp; MB Indesta – tai patikima statybų įmonė, specializuojanti karkasinių namų statyboje Lietuvoje. Mūsų ilgametė patirtis Skandinavijoje sėkmingai pritaikoma vietinėje rinkoje, leidžianti mums užtikrinti aukščiausią statybos kokybę ir profesionalumą.</p>
          <p>&nbsp; Kiekvieno projekto pradžioje mes išklausome Jūsų poreikius, norus ir lūkesčius, parengiame preliminarią darbų/medžiagų sąmatą.</p>
          Su didele patirtimi šioje srityje, mes puikiai išmanome medinių konstrukcijų ypatybes ir galimybes. Kiekvienas projektas mums yra svarbus, todėl stengiamės užtikrinti aukščiausią kokybę, naudojant tik geriausias medžiagas ir modernias technologijas.
          <p>&nbsp; Dirbdami, mes skiriame didelį dėmesį ne tik namų projektų įgyvendinimui, bet ir racionalioms karkasinių namų statybos technologijoms, siekdami optimaliai panaudoti išteklius ir laiką, todėl glaudžiai bendradarbiaujame su projektuotojais ir dizaineriais, kurie padeda priimti optimaliausius sprendimus Jūsų namų projektams.</p>
          <p>&nbsp; Mūsų pagrindinis tikslas - pasitelkus tik kokybiškas medžiagas, pastatyti Jums tvirtą, patikimą ir taupantį šilumą namą.</p>

        </div>
      </motion.div>
    </section>
  )
}