import HomeHerader from '@/Components/HomeHerader'
import HomeSearch from '@/Components/HomeSearch'
import { ImagesSlider } from '@/Components/ui/image-slider';
import Image from 'next/image'
import Img1 from "@/app/assets/1.jpg"
import Img2 from "@/app/assets/2.jpg"
import Img3 from "@/app/assets/4.jpg"

import React from 'react'


export default function Home() {

  
   const images = [
  Img1.src,
    Img2.src,
    Img3.src
  ];
  return (
    <>
     <div className='bg-[#202124] h-auto w-full'>
    <ImagesSlider className="h-[40rem]" images={images}>
   <div className='z-50'>
   <HomeHerader />
      <div className='h-[30rem]  flex items-center w-full flex-col mt-16'>
  <div className='relative '>
  <h1 className=' text-5xl font-bold text-white'>Web Search</h1>
  <p className='font-serif absolute text-blue-700 font-semibold  right-[-6px]'>search</p>
  </div>
    <HomeSearch/>
      </div>
   </div>
    </ImagesSlider>
     </div>
      
    </>
  )
}
