import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'
import { LayoutProps } from './layout.props'

const Layout = ({children}:LayoutProps) => {
  return (
    <div>
        <div className="flex bg-[#F2F4F7]">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
          <Navbar />
          {children}
    </main>
    </div>
    </div>
  )
}

export default Layout