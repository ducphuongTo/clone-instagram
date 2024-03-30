import Bottom from '@/components/shared/Bottom'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
      <Topbar/>
      <LeftSidebar/>

      <section className='flex flex-1 h-full'>
        <Outlet/>
      </section>

      <Bottom/>
    </div>
  )
}

export default RootLayout