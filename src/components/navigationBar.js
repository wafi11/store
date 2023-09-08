import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import {BsFillHeartFill,BsFillBagFill} from 'react-icons/bs'

function NavigationBar() {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* left side*/}
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>
        CONVERSE.
      </h1>
      {/* <div className='hidden lg:flex bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black p-2 rounded-full text-white'>Comfortable</p>
          <p className='p-2'>Stylish</p>
        </div> */}
      <ul className="flex">
        <li className='p-4'>New & Features</li>
        <li className='p-4'>Men</li>
        <li className='p-4'>Women</li>
        <li className='p-4'>Kids</li>
        <li className='p-4'>Accessories</li>
      </ul>

      <div className='bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:[400px]'>
      <AiOutlineSearch size={25} className='hover:bg-gray-400 rounded-full'/>
        <input type='input' placeholder='Search input...' 
          className='bg-transparant rounded-full p-2 w-full focus:outline-none ' />
        
        
      </div>
      <div className='flex '>
      <BsFillHeartFill size={25} className="hover:bg-gray-400 rounded-full mx-3"/>
        <BsFillBagFill size={25} />
      </div>
    </div>
  )
}

export default NavigationBar