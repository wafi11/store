import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
      <div className='max-h-[500px] relative'>
        {/* overlay */}
        <div className='absolute w-full h-full max-w-[1600px] text-gray-200 max-h-[500px] flex flex-col justify-center bg-black/40'>
          <h1 className='px-4 py-3 text-4xl sm:text-4xl lg:text-5xl font-bold'>Converse <span className='text-blue-300'>70's</span></h1>
          <p className='text-xl px-4 drop-shadow-2xl max-w-[400px]'>
            Musim kemarau ini, 70's
            menampilkan lebih banyak warna 
            untuk menemani hari-harimu.</p>
          <button className='max-w-[100px] bg-white text-black font-medium my-3 px-2 mx-2'>Shop Now</button>
        </div>
        <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
      </div>
    </div>
  )
}

export default Home