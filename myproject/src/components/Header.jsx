import React from 'react'

export default function Header() {
  return (
    // Header goes here 
    <div className='flex flex-row items-center justify-around py-[10px] bg-slate-400 fixed w-[100%] z-10'>
     {/* Logo goes here  */}
     <div className='bg-blue-300 px-[30px] py-[10px] rounded-lg'>
        <h1>Logo</h1>
     </div>
     {/* Site title goes here  */}
     <div className='bg-blue-300 px-[100px] py-[10px] rounded-lg'>
        <h1>Site title</h1>
     </div>
    </div>
  )
}
