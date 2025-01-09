"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { API_URL } from "@/utils/api";
import camera from '../../public/camera.png'
 const products=[
  {
    title:'Camera',
    tags:["Camera" , "Digital Camaera"],
    image:camera
  },
  {
    title:'Camera',
    tags:["Camera" , "Digital Camaera"],
    image:camera
  },
  {
    title:'Camera',
    tags:["Camera"  ,"Digital Camaera"],
    image:camera
  },
 ]

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  // // State to store products
  // const [products, setProducts] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(`${API_URL}/getProducts`);
  //       const data = await response.json();

  //       if (response.ok) {
  //         setProducts(data.products);
  //       } else {
  //         setError(data.message);
  //       }
  //     } catch (err) {
  //       setError("Failed to fetch products");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!products) return <div>No products found</div>;
  
  // If products are still loading, render a placeholder or loading text
  // if (loading) {
  //   return <p>Loading products...</p>;
  // }

  // // Handle error state
  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white py-5">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-4">
          <div className="w-[300px] flex items-center flex-col gap-3 mt-6 mr-20">
            <div className="flex items-center gap-6">
              <h2 className="text-7xl text-bold">Work</h2>
              <h1 className="text-3xl p-6 border border-gray-400 rounded-full flex justify-center items-center">
                {products?.length || 0}
              </h1>
            </div>
            <p className="text-xl text-semibold">
              A selection of our crafted work, built from scratch by our talented in-house team.
            </p>
          </div>
          <div className="flex  gap-6 items-center p-4">
          {products?.map((product) => (
  <div key={product.id} className="relative w-[600px] max-w-3xl bg-white rounded-2xl shadow-lg">
    <div className="relative">
      <Image
        src={product.image || "/coke.jpg"} // Fallback image if no product image is available
        alt={product.title}
        width={400}
        height={800}
        className="w-[600px] h-96 object-cover rounded-2xl"
      />
    </div>
    <div className="absolute inset-0 bottom-0 left-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-2xl">
      <div className="flex-col gap-2 absolute bottom-5 left-4">
        <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
        <p className="flex text-white gap-2 ml-2">
          {product.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-transparent border border-white text-white flex justify-center items-center mt-2 gap-2 text-center rounded-full w-[120px] h-10 text-sm px-2 z-[999]"
            >
              {tag}
            </div>
          ))}
        </p>
      </div>
    </div>
  </div>
))}

    </div>
        </motion.div>
      </div>
    </section>
  );
}
