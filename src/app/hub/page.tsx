import Image from 'next/image'
import React from 'react'
import { bg } from '../../../public/assets'
import Hub from '@/components/hub/Hub'

export default function page() {
  return (
    <main className="relative h-screen w-full flex justify-center items-center">
      <Hub/>
    </main>
  )
}
