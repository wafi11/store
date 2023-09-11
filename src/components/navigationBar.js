import {React,useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch,AiOutlineClose } from 'react-icons/ai'
import { BsFillHeartFill, BsFillBagFill } from 'react-icons/bs'

function NavigationBar() {
  const [nav,setNav] = useState(false)

  const mobileMenu = () => {
    setNav(!nav)
  }
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>
        CONVERSE.
      </h1>
      <ul className="hidden md:flex">
        <li className='p-4'>New & Features</li>
        <li className='p-4'>Men</li>
        <li className='p-4'>Women</li>
        <li className='p-4'>Kids</li>
        <li className='p-4'>Accessories</li>
      </ul>


      <div className='bg-gray-200 flex rounded-full items-center px-2 w-[200px] lg:[400px]'>
        <AiOutlineSearch size={25} className='bg-gray-200 rounded-full ' />
        <input type='input' placeholder='Search input...'
          className='bg-gray-200 rounded-full  p-2 w-full focus:outline-none ' />
      </div>
      <div className='flex items-center'>
        <button><BsFillHeartFill size={25} /></button>
        <button><BsFillBagFill size={25} /></button>
        <button className="px-5 py-2 bg-[#ffff] hidden md:flex">Sign Out</button>
      </div>

      <div onClick={mobileMenu} className='sm:block md:hidden '>
        {!nav ? <AiOutlineMenu size={20}/> :<AiOutlineClose size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-gray-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4'>CONVERSE.</h1>
          <li className='p-4 border-b border-gray-600'>New & Features</li>
          <li className='p-4 border-b border-gray-600'>Men</li>
          <li className='p-4 border-b border-gray-600'>Women</li>
          <li className='p-4 border-b border-gray-600'>Kids</li>
          <li className='p-4'>Accessories</li>
          <button className="px-5 py-2 bg-gray-200 hover:bg-[#ffff] bottom-0 left-0">Sign Out</button>
      </ul>


    </div>
  )
}

export default NavigationBar