'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IoMdImages } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchOptions() {
const router = useRouter();
const searchParams = useSearchParams();
const searchTerm = searchParams.get('searchTerm');
const pathName = usePathname();

const seleteTab = (tab) =>{
 router.push(`/search/${tab === 'image' ? 'image' : 'web'}?searchTerm=${searchTerm}`)
}

  return (
    <div className='flex space-x-9  select-none border-b border-gray-700 w-full justify-center 
    lg:justify-start lg:pl-52 text-gray-700 text-lg'>
      <div onClick={() => seleteTab("All")} className={`flex items-center  px-4 space-x-2 border-b-4 border-transparent active:text-white
      cursor-pointer   ${pathName === '/search/web' && '!text-white !border-white'}` }>
        <AiOutlineSearch className='text-xl' />
        <p>All</p>
      </div>
      <div onClick={() => seleteTab("image")} className={`flex items-center space-x-2 border-b-4 border-transparent active:text-white
      cursor-pointer px-2 ${pathName === '/search/image' && '!text-white !border-white'}` }>
     <IoMdImages className=' group hover:bg-gray-700  ' />
        <p className=' group-hover:bg-gray-700'>Images</p>
      </div>
    </div>
  )
}
