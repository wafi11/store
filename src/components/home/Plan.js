import React from 'react'
import planImage from '../home/dataHome'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udmVyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='/'/>
        <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1570425387687-d2a34c7304a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udmVyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='/'/>
        <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1622253543934-c3cb280f8323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnZlcnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='/'/>
        <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1628872610206-cf9fec5f91d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnZlcnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='/'/>
        <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1589310853228-439adca878e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udmVyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80' alt='/'/>
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Choose your Shoes?</h3>
        <p className='text-2xl py-6'>Mau tampil Keren di segala kondisi?</p>
        <p className='pb-6'>Converse punya banyak pilihan yang siap menemani hidup anda.</p>
        <div>
          <button className='border-black mr-4 bg-gray-200 hover:shadow-xl px-2'>Learn More</button>
          <button className='bg-gray-900 text-white border-black hover:bg-black'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Plan