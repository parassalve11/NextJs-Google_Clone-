import Link from 'next/link'
import React from 'react';
import { TbGridDots } from "react-icons/tb";

export default function HomeHerader() {
  return (
    <header className=''>
        <div className="flex items-center justify-end gap-5 px-10 py-3 text-sm  ">
            <Link className='hover:underline text-[#DBFFFF]' href={'https://mail.google.com/'}>
                Gmail
            </Link>
            <Link className='hover:underline text-[#DBFFFF]' href={'https://images.google.com/'}>
                Images
            </Link>
            <TbGridDots className='text-4xl bg-transparent p-2 text-[#DBFFFF] hover:bg-gray-300 hover:text-slate-500 rounded-full' />
            <button className='px-4 p-1 text-white font-medium hover:brightness-105 hover:shadow-xl rounded-lg bg-blue-600'>Sign in</button>
        </div>
    </header>
  )
}
