import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { TbGridDots } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import SearchOptions from './SearchOptions'

export default function SearachHeader() {
  return (
    <footer className='sticky w-full bg-[#202124] flex flex-wrap gap-5'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href={'/'}>
        <Image className='' src={'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'} alt='Google logo' width={90} height={40} priority style={{width:"auto"}}/>
        </Link>
        
        <div>
        <div className="flex-1">
          <SearchBox />
        </div>
        
        </div>
        <div className='flex space-x-5 text-white '>
        <IoSettings className='bg-transparent hover:bg-gray-700 p-2 text-[35px] rounded-full hidden md:inline-flex'/>
        <TbGridDots className='bg-transparent hover:bg-gray-700 p-2 text-[35px] rounded-full hidden md:inline-flex'/>
        <button className='px-4 p-1 text-white font-medium hover:brightness-105 hover:shadow-xl rounded-lg bg-blue-600'>Sign in</button>
        </div>
       
        
      </div>
      <SearchOptions />
    </footer>
  )
}
