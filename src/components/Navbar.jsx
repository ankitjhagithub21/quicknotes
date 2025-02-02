import React from 'react'
import { Link } from 'react-router-dom'
import { Github, House, Plus } from 'lucide-react'

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between px-3 py-5">
        <h2 className='text-2xl font-semibold'>Quick<span className='text-green-500'>Notes</span> </h2>
        <ul className='flex gap-4 items-center'>

          <Link to={"/"} className='bg-green-500 hover:bg-green-600 text-white flex items-center gap-1 rounded-lg px-3 text-sm py-1'>
            <House size={16} />
            Home</Link>
          <Link to={"/add"} className='bg-green-500 hover:bg-green-600 flex gap-1 text-white items-center rounded-lg text-sm px-3 py-1'>
            <Plus size={16}/>
            Add Note</Link>
          <a href="https://github.com/ankitjhagithub21/quicknotes" target='_blank'>
            <Github />
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar