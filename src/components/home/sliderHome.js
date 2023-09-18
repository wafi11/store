import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {dataSliderHome} from './dataHome'

const SliderHome = () => {
  console.log(dataSliderHome)
  return (
    <div className='max-w-[1640px] h-[600px] w-full m-auto py-16 px-4 '>
        <h1 className='text-4xl font-bold'>Trending Styles</h1>
        <div className="flex py-4 px-4 ">
          <AiOutlineArrowRight size={30}/>
          <h1 className='ml-3 text-2xl'>Shop All in Trending Styles</h1>
        </div>
        {/* Display Images */}
        <div className='lg:flex pt-4 sm:hidden'>
          {dataSliderHome.map((data,index) => (
            <div key={index} className=''>
              <img src={data.url} alt={data.name}
              className='w-full h-[300px]'
              />
              <div className=''>
                <p className='text-md font-bold p-2 pt-3'>{data.name}</p>
                <p>
                  <span className='p-2'>Rp. 3.000.000</span>
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SliderHome