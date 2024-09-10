import Image from 'next/image'
import React from 'react'
import hero from '../assets/hero.svg';

function HeroSection() {
  return (
    <div className='w-full h-[calc(100vh-120px)] hero flex justify-center'>
        <div className='w-[90%] 2xl:w-[70%] flex justify-between items-start'>
            <div className='text-white flex flex-col gap-y-8 justify-center h-full'>
                <div>
                <h1 className='text-6xl axiforma pb-4'>Buy, Create &</h1>
                <h1 className='text-6xl axiforma '>Sell <span className='font-sans italic text-[#1EE0E1]'>Unique NFTs</span> File.</h1>
                </div>
                <p className='helvetica'>NFTs are used for digital art and collectibles, GameFi projects, metaverses and more</p>
                <button className='explore-btn w-36 h-10 hover:border rounded-md'>Explore NFTs</button>
            </div>
            <div className='h-auto '>
            <Image
                src={hero}
                alt="Responsive SVG"
                width={500}
                height={500}
            />
            </div>
        </div>
    </div>
  )
}

export default HeroSection