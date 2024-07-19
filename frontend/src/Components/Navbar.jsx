import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <div>
            Bombay Chocnuts
        </div>
        <div>
            <div className='w-62 bg-red-800'>
              <ul>
                <li>Feature Products</li>
              </ul>
            </div>
        </div>
    </nav>
  )
}
