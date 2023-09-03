import React from 'react'
import { BsBell } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div>
        <nav className="flex items-center px-4 py-2">
          <div className="flex-grow">
            <input
              type="text"
              className="w-3/4 text-black px-4 py-2 rounded-md outline-none "
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center gap-[20px]">
          <BsBell/>
          <h3>Kruluz Utsman</h3>
          <img src="/avatar.png" alt="avatar" width={36} height={36} />
          </div>
        </nav>
    </div>
  )
}

export default Navbar