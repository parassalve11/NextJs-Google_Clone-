'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"
import{BsChevronLeft , BsChevronRight } from 'react-icons/bs'

export default function PaginationBtn() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const startIndex = +searchParams.get('start') || 1 ;
  return (
    <div className=''>
        <div className="text-white flex justify-between sm:justify-start font-semibold px-10 pb-4 sm:px-0 sm:space-x-44 ">
          {
            startIndex >= 10 &&(
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                    <div className="flex items-center cursor-pointer hover:underline">
                        <BsChevronLeft  className='h-5' />
                        <p>Previous</p>
                    </div>
                </Link>
            )
          }

          {
            startIndex <= 90 && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                    <div className="flex itmes-center hover:underline cursor-pointer ">
                        <BsChevronRight className='h-5' />
                        <p>Next</p>
                    </div>
                </Link>
            )
          }
        </div>
    </div>
  )
}
