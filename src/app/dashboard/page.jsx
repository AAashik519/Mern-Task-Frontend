'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [user, setUser] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token);
    
    if (!token) {
      router.push('/login')
    } else {
      setUser(true)
    }
  }, [])

  // const fetchUser = async (token) => {
  //   try {
  //     const response = await fetch('https://mern-task-backend-ho1z.vercel.app/api/auth/me', {
  //       method: 'GET',
  //       headers: {
  //         'x-auth-token': token,
  //       },
  //     })
      
  //     if (response.ok) {
  //       const userData = await response.json()
  //       setUser(userData)
  //     } else {
  //       router.push('/login')
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error)
  //     router.push('/login')
  //   }
  // }

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900">Welcome to your Dashboard</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <button
                  onClick={handleLogout}
                  className="text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
