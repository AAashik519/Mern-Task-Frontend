"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import mobileImg from "../../public/mobnile.jpg";

const services = [
  {
    title: "E-commerce",
    caseStudy: {
      name: "Alveena Casa",
      image: mobileImg,
    },
  },
  {
    title: "Website Design",
    caseStudy: {
      name: "Modern Studio",
      image: mobileImg,
    },
  },
  {
    title: "Digital Products",
    caseStudy: {
      name: "Tech Solutions",
      image: mobileImg,
    },
  },
  {
    title: "Brand Identities",
    caseStudy: {
      name: "Creative Agency",
      image: mobileImg,
    },
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-black text-white py-20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-2xl mb-12">
          Our team of experts can help you with...
        </h2>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative flex items-center gap-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Effect */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  x: hoveredIndex === index ? 0 : -20,
                }}
                className="absolute right-0   transform -translate-y-1/2 flex items-center gap-4"
              >
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Latest Case Study</p>
                  <p className="text-white">{service.caseStudy.name}</p>
                </div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={service.caseStudy.image}
                    alt={service.caseStudy.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <MoveRight className="w-16 h-16  " />
              </motion.div>

              {/* Title */}
              <h3
                className={`text-5xl font-bold transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <hr className=" my-16 w-[1200px] mx-auto" />
      <div className="w-[1200px] mx-auto">
        <h2 className="text-5xl font-semibold text-blue-500">Creative Agency </h2>
        <div className="flex   ">
            <h1 className="flex-1 text-xl mt-5" >We’re an award-winning creative agency based in London, focused on E-Commerce, Web Design London, Digital Products, Branding and SEO.</h1>
            <div className="flex-1 flex justify-end gap-5 ">
                <button className=" border border-blue-500 w-[200px] h-16    px-6 rounded-full ">300+ Project</button>
                <button className=" border border-blue-500   w-[200px] h-16   px-6  rounded-full">15 Awards</button>
            </div>
        </div>
      </div>
    </section>
  );
}
