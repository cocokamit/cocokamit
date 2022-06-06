import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>MAAYONG ADLAW ;)</p>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Hello, I'm Heherson Amit.</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>A full-stack </p>
                <Typed className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' 
                strings={['Web Developer','Android App Developer','Cat servant']} 
                typeSpeed={50} 
                backSpeed={50} 
                loop/>
            </div>
           
            <p className='md:text-2xl text-xl font-bold text-gray-500'>&#60;&#62;&nbsp;&#60;/&#62;</p>
            <a href='#dasd' className='bg-[#00df9a] w-[200px] hover:bg-[#59df9a] hover:shadow-md hover:shadow-white hover:drop-shadow-md rounded-md font-medium my-6 mx-auto py-3 text-black'>01. ME</a>
            
        </div>
        <div className='flex justify-between relative bottom-0 items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
          <div className=' transition-height delay-100 duration-500 flex justify-center absolute bottom-0 bg-white h-[200px] lg:h-[600px] md:h-[500px] sm:h-[300px] w-2'>

          </div>
        </div>
    </div>
  )
}

export default Hero