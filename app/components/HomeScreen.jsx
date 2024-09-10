"use client"
import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'

export default function HomeScreen() {
  return (
    <div className='overflow-hidden w-full h-full'>
      <NavBar/>
      <HeroSection/>
    </div>
  )
}
