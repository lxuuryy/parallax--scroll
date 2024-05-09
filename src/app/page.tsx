'use client'
import React, {useRef} from "react";
import Image from "next/image";
import {useScroll, useTransform, MotionValue, motion } from 'framer-motion'
import Lenis from 'lenis'
import useDimension from './useDimension'

interface ColumnProps {
  images: string[];
  y: MotionValue<number>; 
  top: any
}
export default function Home() {

  const {  height } = useDimension(); 

  React.useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}, []);

  const ref= useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, height*2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height*3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height*1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height*3])
 
  const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.jpg',
    '/12.jpg',

  ]

  
  return (
    <main className="">
      <div className="h-[100vh]">
        <div className="h-[100%] w-full bg-gradient-to-b from-slate-300 to-slate-800 flex items-center justify-center">
          <h1 className="text-5xl text-white ">Future of Modern website</h1>
        </div>
      </div>
      <div ref={ref}  className="h-[175vh] flex bg-slate-800 gap-[2vw] box-border overflow-hidden ">
        <Column images={[images[0], images[1], images[2]]} y={y} top={'-45%'} />
        <Column images={[images[3], images[4], images[5]]} y={y2} top={'-100.5%'}/>
        <Column images={[images[6], images[7], images[8]]} y={y3} top={'-45.5%'}/>
        <Column images={[images[9], images[10], images[11]]} y={y4} top={'-100%'}/>
      </div>
      <div className="h-[100vh]">
        <div className="h-[100%] w-full bg-gradient-to-t from-slate-500 to-slate-800 flex items-center justify-center">
          <h1 className="text-5xl text-white">Scroll Up</h1>
        </div>
      </div>
    </main>
  );
}

const Column =({images, y, top} : ColumnProps) => {
  return (
    <motion.div style={{y:y, top:top}} className="flex flex-col w-[25%] h-[100%] min-w-[50px] relative  ">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-full my-2 ">
          <Image className="rounded-xl " src={image} layout="fill" alt={image} objectFit="cover"  />
        </div>
      ))}
    </motion.div>)
}
