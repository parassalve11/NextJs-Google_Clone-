import Link from 'next/link'
import React from 'react'
import HTMLReactParser from 'html-react-parser'
import PaginationBtn from './PaginationBtn'


export default function WebSearchResults({ results }) {
   

  return (
    <div className='w-full mx-auto sm:pb-24 pb-40 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
     <p className='text-gray-400 text-sm pt-3 mb-5'>
        About {results.searchInformation?.formattedTotalResults} results (
                {results.searchInformation?.formattedSearchTime} seconds)
     </p>
        {results.items?.map((result)=>(
            <div className="max-w-xl mb-8" key={result.link}>
                <div className=" group flex flex-col">
                    <Link className='text-[#9AC1C6]' href={result.link}>
                        {result.formattedUrl}
                    </Link>
                    <Link className='text-xl decoration-[#83ABF1] group-hover:underline font-medium text-[#83ABF1] truncate ' href={result.link}>
                        {result.title}
                    </Link>
                    
                </div>
                <p className='text-[#BDC1C6]'>{HTMLReactParser(result.htmlSnippet)}</p>

            </div>
        ))}
        <PaginationBtn />
    </div>
  )
}
