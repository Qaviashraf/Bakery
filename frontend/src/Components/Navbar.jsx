import React from 'react'
import headerborder from '../assets/headerAssets/header-red-border.svg'
import logo from '../assets/logo/Main-Logo.svg'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black'>
        <div className='w-24 ml-16'>
            <img src={logo} alt="" />
        </div>
        <div>
            <div className='relative text-xs text-black '>
                <div>
                <img src={headerborder} alt="" />
              <ul className='absolute right-20 top-0 gap-8 flex mt-2 text-sm text-white'>
                <li>Feature Products</li>
                <li>Trending Products</li>
                <li>Store Location</li>
                <li>Track Order</li>
                <li>My Account</li>
              </ul>
              </div>
              <div>
              <ul className='gap-8 flex mt-6 text-lg text-white'>
                <li>Home</li>
                <li>About Us</li>
                <li>Shop</li>
                <li>Contact Us</li>
                <li>Custom Basket</li>
                <li>
                    <div>
                        <input type="text" placeholder='Search'/>
                    </div>
                </li>
              </ul>
              </div>
            </div>
            
        </div>
    </nav>
  )
}
