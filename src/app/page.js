import HomeHerader from '@/Components/HomeHerader'
import HomeSearch from '@/Components/HomeSearch'
import Image from 'next/image'


import React from 'react'

export default function Home() {
  return (
    <>
     <div className='bg-[#202124] h-screen'>
     <HomeHerader />
      <div className='h-auto mt-[10vh] flex items-center flex-col justify-center'>
    <Image className='' src={'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'} alt='Google logo' width={270} height={70} priority style={{width:"auto"}}/>
    <HomeSearch/>
      </div>
     </div>
      
    </>
  )
}
