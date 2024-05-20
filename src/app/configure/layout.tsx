import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

export default function Layout({ children}: Readonly<{children: React.ReactNode}>) {

  return (
    <MaxWidthWrapper className='flex-1 flex flex-col '>
        {children}
    </MaxWidthWrapper>
  )
}

