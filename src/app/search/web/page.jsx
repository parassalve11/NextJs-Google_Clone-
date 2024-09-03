import WebSearchResults from "@/Components/WebSearchResults";
import Link from "next/link";




export default async function WebSearchPage({searchParams}) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve , 10000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);
  if(!response.ok) throw new Error("Something Went Wrong!!")
  const data = await response.json();
  const results = data.items; 
  if(!results){
    return(
      
      <div className="min-h-[70vh] flex flex-col items-center justify-start pt-10">
       <div className="mb-4 text-3xl">
        No result found for <span className="hover:underline text-gray-400 ">{searchParams.searchTerm}</span>
        </div>
        <p className="text-lg">
          Try to search Something else Other than <span className="hover:underline text-gray-400">{searchParams.searchTerm}</span>
        </p>
        <Link href={'/'} className="text-xl text-blue-600 font-semibold hover:underline hover:opacity-95">
        Home
        </Link>
      </div>
       
    )
  }
  return (
  
  <div className="">
      <div className="min-h-auto pb-10 bg-[#202124]">
   { results && <WebSearchResults results={data} /> }
    </div>
  </div>
  
  )
}
