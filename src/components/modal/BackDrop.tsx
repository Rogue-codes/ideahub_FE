import React, { ReactNode } from 'react'
interface BackDropProps{
    children: ReactNode
}
export default function BackDrop({children}:BackDropProps) {
  return (
    <div className='w-full h-screen fixed left-0 top-0 flex justify-center items-center backdrop-blur-sm'>
        {children}
    </div>
  )
}
