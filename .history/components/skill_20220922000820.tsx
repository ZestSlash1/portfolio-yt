import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
};

export default function skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
      </div>
  )
}