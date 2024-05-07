import React from 'react'
import headerimg from '../../src/assets/headerimg.jpeg'
export default function HeaderImage() {
  return (
    <div className=' w-full h-[400px] lg:h-[500px] p-[20px] '>
      <img src= {headerimg } alt='Header Image' className='object-cover w-full h-full' />
    </div>
  )
}
