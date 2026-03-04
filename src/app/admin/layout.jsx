import Sidebar from '@/components/AdminComponents/Sidebar'
import React from 'react'

export default function layout({ children }) {
  return (
    <div className='flex bg-base-200'>
      <div>
        <Sidebar></Sidebar>
      </div>

      {children}
    </div>
  )
}
