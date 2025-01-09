'use client'
import Counter from './Counter';
import { motion } from 'framer-motion'
import Image from 'next/image'
import bmw from '../../public/bmw.jpeg'
import partnerImg from '../../public/partner.jpg'
const brands = [
  { name: 'BBC', logo: bmw },
  { name: 'BMW', logo: bmw },
  { name: 'Costa', logo: bmw }
]

export default function DigitalPartner() {
  return (
    <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            Your Digital Partner
          </motion.h2>
  
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl"
          >
            We partner with companies of all sizes to solve complex business
            challenges and define their digital strategies and objectives that
            deliver results. We help bring ideas to life and create brands,
            websites & digital products that work.
          </motion.p>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex -space-x-4">
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-500">Brands who've trusted us...</p>
          </motion.div>
        </div>
  
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-50 rounded-3xl p-12"
        >
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="space-y-2 w-1/2">
              <h3 className="text-6xl font-bold">
                <Counter end={20} duration={2000} />+
              </h3>
              <p className="text-gray-600">Years on the market</p>
            </div>
            <div className="space-y-2 w-1/2">
              <h3 className="text-6xl font-bold">
                <Counter end={500} duration={2000} />+
              </h3>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  
    {/* Full-width image */}
    <div className="mt-12 w-[1200px] mx-auto">
      <Image
        src={partnerImg}
        alt="Partner Image"
        className="w-full h-[800px] object-cover rounded-2xl "
      />
    </div>
  </section>
  
  )
}

