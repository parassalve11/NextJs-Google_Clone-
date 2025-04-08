
import Image from 'next/image';
import React from 'react';
import bannar from "@/app/assets/3.jpg"

export default function HomeHerader() {
  return (
    <header className=''>
      
        <div className="flex items-center justify-center w-full ">
           <Image
           src={bannar}
           alt=""
           width={500}
            height={200}
           />
        </div>
    </header>
  )
}
