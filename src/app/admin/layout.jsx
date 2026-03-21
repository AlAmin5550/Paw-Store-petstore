import Sidebar from '@/components/AdminComponents/Sidebar'
import { authOptions } from '@/lib/authOptions'
import { connectDB } from '@/lib/connectDB'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function layout({ children }) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    redirect('/signin?callbackUrl=/admin')
  }

  const db = await connectDB()
  const sessionEmail = String(session.user.email || '').trim()
  const currentUser = await db.collection('users').findOne({
    $or: [
      { email: sessionEmail },
      { email: sessionEmail.toLowerCase() },
    ],
  })

  const userRole = String(currentUser?.role || '').trim().toLowerCase()

  if (!currentUser || userRole !== 'admin') {
    redirect('/')
  }

  return (
    <div className='flex bg-base-200'>
      <div>
        <Sidebar></Sidebar>
      </div>

      {children}
    </div>
  )
}
