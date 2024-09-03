'use client';

import Link from 'next/link';

import  { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { TiMicrophoneOutline } from "react-icons/ti";
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
    const[input , setInput] = useState('')
    const[randomSearchLoading , setRandomSearchLoading] = useState(false);

    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
      };
      const randomSearch = async(e) =>{
        setRandomSearchLoading(true);
        const response = await fetch('https://random-word-api.herokuapp.com/word')
        .then((res) => res.json())
        .then((data)=> data[0]);
        if(!response) return;
        router.push(`/search/web?searchTerm=${response}`)
        setRandomSearchLoading(false)
      }

  return (
    <div className='mt-6'>
        <form onSubmit={handleSubmit} className=' group flex items-center w-[40vw] mx-auto border border-gray-500 px-5 py-3 rounded-full hover:shadow-xl focus-within:shadow-xl transition-shadow sm:max-w-xl lg:max-w-2xl bg-[#202124] hover:bg-[#303134]  ' >
        <GoSearch className='text-[#7F8489] text-xl'/>
            <input onChange={(e) =>  setInput(e.target.value)} type="text" className=' flex-grow  focus:outline-none px-3 text-white bg-[#202124] group-hover:bg-[#303134] '  />
        <TiMicrophoneOutline className='text-white text-xl' />
        </form>
        <div className='text-[#DBFFFF] flex justify-center gap-3 my-7 text-sm'> 
            <button onClick={handleSubmit} className='p-2 px-4 bg-[#303134] hover:border hover:border-[#474A4E]  rounded-md'>Google Search</button>
            
            <button disabled={randomSearchLoading} onClick={randomSearch} className='p-2 px-4 bg-[#303134] hover:border hover:border-[#474A4E] rounded-md'>{randomSearchLoading ? 'loding...' : "I'm Feeling Lucky "}</button>
           

        </div>
       
    </div>
  )
}
