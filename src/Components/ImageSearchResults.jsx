import Link from 'next/link'
import React from 'react'
import PaginationBtn from './PaginationBtn'


export default function ImageSearchResults({results}) {


    return (
    <div className='sm:pb-24  pt-5  '>
        <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         px-[10vw] space-x-4">
            {results.items?.map((result) => (
                <div className="mb-8" key={result.link}>
                    <div className="group">
                        <Link href={result.image.contextLink}>
                            <img src={result.link} alt={result.title} 
                            className='h-40 group-hover:shadow-xl object-contain transition-shadow duration-300 rounded-xl'/>
                        </Link>
                        <Link className='' href={result.image.contextLink}>
                            <h1 className='text-sm text-[#96999E] group-hover:underline'>{result.displayLink}</h1>
                        </Link>
                        <Link className='' href={result.image.contextLink}>
                            <h1 className='group ext-sm w-60 font-medium text-[#B4B7BC] truncate'>{result.title}</h1>
                        </Link>
                      
                    </div>
                </div>
            ))}
         
        </div>
        <div className=' px-[12vw]'>
            <PaginationBtn  />
        </div>
    </div>
  )
}
