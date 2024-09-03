import React from 'react'
import CountryLookUp from './CountryLookUp'

export default function Footer() {
  return (
  <div className="relative   ">
      <footer className=' absolute origin-bottom-left   h-18 w-full flex flex-col my-0   border border-[#171717]'>
           <div className='section-1 p-3 bg-[#171717]'>
            <h1 className='px-3 font-medium text-sm text-white'>
                <CountryLookUp />
            </h1>
           </div>
          <div className='bg-gray-700 h-[1px]'></div>
           <div className='flex items-center text-sm justify-between section-2 p-3 pb-8 bg-[#171717] capitalize font-normal text-white list-none '>
            <div className="left flex items-center gap-x-5 px-5 border border-[#171717]  cursor-pointer ">
                <li className='hover:underline'>About</li>
                <li className='hover:underline'>advertising</li>
                <li className='hover:underline'>business</li>
                <li className='hover:underline'>How search works</li>
            </div>
            <div className="right flex items-center gap-x-5 px-5  cursor-pointer">
                <li className='hover:underline'>privacy</li>
                <li className='hover:underline'>terms</li>
                <li className='hover:underline'>settings</li>
            </div>
           </div>
    </footer>
  </div>
  )
}
