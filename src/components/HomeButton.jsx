"use client"
import { motion } from 'framer-motion'
import { Earth, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavLink = motion(Link)
const HomeButton = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2 }}
      href={"/"}
      target={"_self"}
      className="text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50
    "

      aria-label={"home"}
      name={"home"}
    >
      <span className='relative peer w-14 h-14 p-4 hover:text-accent'>
        <Earth className='w-full h-auto' strokeWidth={1.5} />

        <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />

        <span className='absolute hidden peer-hover:block px-1 py-1 left-full mx-2 top-1/4 -translate-x-1/6 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
          Home
        </span>
      </span>
    </NavLink>
  )
}

export default HomeButton