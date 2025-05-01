"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

  const path = usePathname();
  useEffect(() => {
    console.log(path)
  }, [])

  const { isSignedIn } = useUser(); // Check if user is logged in

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/logo.svg'} width={65} height={75} alt='logo' />
      {/* <div> */}
      <ul className='hidden md:flex gap-6'>
        <Link href={"/dashboard"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/dashboard' && 'text-primary font-bold'}
            `}

          >Dashboard</li>
        </Link>
        <Link href={"/dashboard/upgrade"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/dashboard/upgrade' && 'text-primary font-bold'}
            `}>Upgrade</li>
        </Link>
        <Link href={"/dashboard/contact"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/dashboard/contact' && 'text-primary font-bold'}
            `}>Contact Us</li></Link>
        <Link href={"/dashboard/about"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/dashboard/about' && 'text-primary font-bold'}
            `}>About Us</li>
          </Link>
      </ul>
        {/* <Link href={"/dashboard/about"}>

          <button className={` text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition text-center 
            cursor-pointer
            ${path == '/dashboard/about' && 'text-primary font-bold'}
            `}>Login In</button></Link> */}
            
      {/* </div> */}

      <nav>
      {!isSignedIn && (
        <div className="flex gap-4">
          <a
            href="/sign-in"
            className={`text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition text-center px-4 py-2`}
          >
            Login
          </a>
          <a
            href="/sign-up"
            className={`text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition text-center px-4 py-2`}
          >
            Sign Up
          </a>
        </div>
      )}
      <UserButton />
      </nav>

      
    </div>
  )
}

export default Header