import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className=' flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 border-slate-50'>
      <Link href='/' className='flex items-center gap-1'>
         <Image 
           src="/icons/favicon.ico"
           alt="logo"
           height={30}
           width={30}
           className='max-sm:size-10 mr-1'
         />
         <p className='text-[18px] font-extrabold text-white max-sm:hidden'>Presync</p>
         {/* <Image
           src="/icons/presync-logo.png"
           alt='presync'
           width={72}
           height={72}
         /> */}
      </Link>
      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar