import React, { ReactNode } from 'react'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface LayoutProps{
    children: ReactNode
}
export default function Layout({children}: LayoutProps) {
  return (
    <>
    <Link href="/" className="flex justify-center items-center absolute top-5 left-5 gap-3 pointer-element">
        <div className='bg-white/10 rounded-full p-3'>
          <Bars3CenterLeftIcon width={20} height={20} className='text-gray-200' />
        </div>
        <p className='text-white font-display text-lg font-thin m-0 leading-[22px]'>Marcel<br />Wiskow.</p>
      </Link>
    <main>{children}</main>
    </>
  )
}
