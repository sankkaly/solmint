"use client"

import React from 'react'

export default function NavBar() {
  return (
    <div className=' h-16 w-full pt-3 flex justify-center'>
        <div className='w-[90%] 2xl:w-[70%] h-full flex justify-between items-center'>
          <h1 className='text-2xl font-bold logo text'>SOLMINT</h1>
            <ul className='text-white/50 flex gap-8'>
                <li className='hover:text-white'>Home</li>
                <li className='hover:text-white'>All NFTs</li>
                <li className='hover:text-white'>Team & Co.</li>
                <li className='hover:text-white'>Contact</li>
            </ul>
            <div className='bg-gradient-to-r from-[#E50AA7] to-[#ff17bd59] rounded-md px-[1px] py-[1px]'> 
            <button className='text-white rounded-md h-12 w-36  bg-[#232045]'>Connect Wallet</button>
            </div>
        </div>
    </div>
  )
}
