'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref)
  
  useEffect(() => {
    if (inView) {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / duration
        
        if (progress < 1) {
          setCount(Math.floor(end * progress))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [end, duration, inView])

  return <span ref={ref}>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl  font-semibold mb-20 max-w-4xl"
        >
          Let our experienced team
          <br />
          elevate your digital goals
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-7xl font-bold">
              <AnimatedCounter end={250} />
            </h3>
            <p className="text-xl text-gray-600">Five-Star Reviews</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-7xl font-bold">
              <AnimatedCounter end={10} duration={1500} />
            </h3>
            <p className="text-xl text-gray-600">In-House Experts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-xl leading-relaxed text-gray-800">
              We have successfully completed over 300+ projects from a variety of industries. 
              In our team, designers work alongside developers and digital strategists, we 
              believe this is our winning recipe for creating digital products that make an impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

