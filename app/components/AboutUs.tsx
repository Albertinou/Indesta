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
          <p>
             &nbsp; &nbsp; &nbsp; Esame profesionalų komanda, specializuojanti karkasinių namų ir medinių konstrukcijų statyboje, renovacijoje bei apdailoje. Mūsų tikslas – sukurti funkcionalius ir estetiškus namus, kurie atitiktų jūsų lūkesčius ir poreikius.
            Su didele patirtimi šioje srityje, mes puikiai išmanome medinių konstrukcijų ypatybes ir galimybes. Kiekvienas projektas mums yra svarbus, todėl stengiamės užtikrinti aukščiausią kokybę, naudojant tik geriausias medžiagas ir modernias technologijas.
            Mūsų komanda ne tik statybos specialistai, bet ir jūsų partneriai, pasirengę išklausyti, patarti ir įgyvendinti net drąsiausias idėjas. Džiaugiamės galėdami pasiūlyti individualius sprendimus, atitinkančius kiekvieno kliento unikalius poreikius.
            Pasitikėkite mumis ir leiskite sukurti jūsų svajonių namus, kurie tarnaus ne tik jums, bet ir ateities kartoms. Kartu mes galime pasiekti nuostabių rezultatų!
          </p>
        </div>
      </motion.div>
    </section>
  )
}