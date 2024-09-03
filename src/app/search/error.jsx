'use client'
import React, { useEffect } from 'react'

export default function Error(error ,reset) {
    useEffect(() =>{
        console.log('error',error);
    },[error])
  return (
    <div className='flex   flex-col itmes-center justify-center pt-10 '>
        <h1 className='mb-4 text-4xl font-medium text-center'>Something went Wrong!</h1>
        <button className='text-blue-700 font-semibold hover:underline  text-xl'>Try Again</button>
    </div>
  )
}
