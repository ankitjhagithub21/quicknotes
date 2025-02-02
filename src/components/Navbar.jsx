import React from 'react'
import { Link } from 'react-router-dom'
import { House, Plus } from 'lucide-react'

const Navbar = () => {
  return (
    <nav>
        <div className="container mx-auto flex items-center justify-between px-3 py-5">
            <h2 className='text-2xl font-semibold'>Quick<span className='text-green-500'>Notes</span> </h2>
          <ul className='flex gap-2'>
         
          <Link to={"/"} className='bg-green-500 hover:bg-green-600 text-white flex gap-1 rounded-lg px-4 py-2'>
          <House/>
          Home</Link>
          <Link to={"/add"} className='bg-green-500 hover:bg-green-600 flex gap-1 text-white rounded-lg px-4 py-2'>
          <Plus/>
          Add Note</Link>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar