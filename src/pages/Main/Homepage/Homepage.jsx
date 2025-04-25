import React from 'react'
import { useUIStore } from '../../../stores/ui.store'
import { api } from '../../../lib/axios'
import { NavLink } from 'react-router-dom'


export default function Homepage() {
  const counter = useUIStore((state) => state.counter)
  const increment = useUIStore((state) => state.incrementCounter)
  const decrement = useUIStore((state) => state.decrementCounter)

  return (
    <main className="p-6 space-y-4">


      <h1>Homepage</h1>

      

      <div className="text-lg">
        Counter: <span className="text-2xl font-semibold text-blue-600">{counter}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>

      <div className=' flex flex-col gap-2'>

        <NavLink to="/about" className=" hover:underline">About</NavLink>
        <NavLink to="/login" className=" hover:underline">auth/Login</NavLink>
        <NavLink to="/register" className=" hover:underline">auth/Register</NavLink>
        <NavLink to="/hyhello" className=" hover:underline">Not Found Page</NavLink>

      </div>
    </main>
  )
}


