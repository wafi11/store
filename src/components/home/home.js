import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center bg-black/40'>
                <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'>Outfit<span className='text-blue-300'> Skena</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'><span className='text-blue-300'>Kuat&</span> Nyaman</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover'src='https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
        </div>
    </div>
  )
}

export default Home