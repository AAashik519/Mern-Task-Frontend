'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import bbc from '../../public/bbc.png'
import tech from '../../public/tech.PNG'
import Vortexa from '../../public/voxkjd.PNG'
import fuldi from '../../public/fuldi.PNG'
import costa from '../../public/costa.PNG'

const partners = [
  {
    name: "Tech Superpowers",
    logo: tech
  },
  {
    name: "Vortexa",
    logo:  Vortexa
  },
  {
    name: "BBC",
    logo:bbc
  },
  {
    name: "Fudli",
    logo: fuldi
  },
  {
    name: "Costa",
    logo:  costa
  }
]

export default function PartnersSection() {
  const [visibleLogos, setVisibleLogos] = useState(partners.map((_, i) => i))

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos(current => {
        // Remove a random logo
        const newVisible = [...current]
        if (newVisible.length > 0) {
          const indexToRemove = Math.floor(Math.random() * newVisible.length)
          newVisible.splice(indexToRemove, 1)
        }
        
        // If all logos are hidden, show them all again
        if (newVisible.length === 0) {
          return partners.map((_, i) => i)
        }
        
        return newVisible
      })
    }, 1000) // Change every second

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className=" w-[1200px] mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[50px] font-semibold mb-20  "
        >
          From ambitious startups to global companies, we partner with great businesses and industry leaders.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          <AnimatePresence>
            {partners.map((partner, index) => (
              visibleLogos.includes(index) && (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-12"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
        </div>
      </div>
    </section>
  )
}

