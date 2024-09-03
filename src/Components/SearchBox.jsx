'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { FaMicrophone } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";


export default function SearchBox() {
  
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const[term , setTerm] = useState(searchTerm || "")


  
    const router = useRouter()
    const handleSubmit = async(e) =>{
      e.preventDefault();
        if(!term.trim()) return ; 
        router.push(`/search/web?searchTerm=${term}`)
    }
  return (
    <form onSubmit={handleSubmit} className='flex w-full group  px-6 py-[9px] mr-[40vw] rounded-full bg-[#303134] hover:brightness-80 shadow-lg max-w-2xl'>
         
   <input  onChange={(e) => setTerm(e.target.value)} value={term} type="text" className='w-full focus:outline-none text-white bg-[#303134] group-hover:brightness-80' />
  <div className='flex items-center space-x-4'>
  <MdClear onClick={()=> setTerm("")} className='text-[#9AA0A6]  text-2xl'/>
   <div className=' text-xl text-[#9AA0A6]'>|</div>
   <FaMicrophone className='text-blue-500 text-xl ' />
    <GoSearch onClick={handleSubmit} className='text-[#8AB4F8] font-extrabold text-xl' />
  </div>
    </form>
  )
}
