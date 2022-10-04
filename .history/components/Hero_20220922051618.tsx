import React from 'react'
import Link from "next/link";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCirlces from './BackgroundCircles'



type Props = {}

export default function ({}: Props) {

    const [text, count] = useTypewriter ({
        words: [
            "Hi, The Name's Shahzeb Tanweer",
            "Web Developer", 
            "Engineer", 
            "MBA"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCirlces />
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://shahzeb.in/static/media/profile.66b3e103ffaf634bc732.png" 
        alt= ""
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Web Developer
                </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>

            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>

            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>

            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>

            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>

        </div>

        </div>
    
    </div>
  )
}