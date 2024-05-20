import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Steps from '@/components/Steps'
import React from 'react'

export default function Layout({ children}: Readonly<{children: React.ReactNode}>) {

  return (
    <MaxWidthWrapper className='flex-1 flex flex-col '>
        <Steps/>
        {children}
    </MaxWidthWrapper>
  )
}

