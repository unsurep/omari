'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Hero2 = () => {
  return (
    <>
      <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className='px-[1rem] md:px-[3rem] py-12 text-zinc-900'>
       
        <div className='flex items-center justify-center gap-5 '>
          <Image src='/image/linebg.png' width={100} height={100} alt='image'/>
          <h1 className='text-center text-cyan-600 text-2xl md:text-3xl font-bold tracking-[5px] font-lato'>About Omari Premium</h1>
        </div>

        <div 
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className='grid grid-cols-1 lg:flex items-center gap-10 py-8'>
          <div>
            <h1 className='text-2xl lg:text-4xl font-extrabold text-cyan-600 font-lato'>Our company was founded in 1770</h1>
            <p className='py-4 text-2xl tracking-wide font-lato'>Omari Premium water is ideal for drinking, <br /> cooking, sports and  even for children. <br /> The product is certified in 12 countries.</p>
            <p>Sed viverra, lorem in maximus faucibus, odio libero fringilla dolor, <br /> convallis vestibulum risus nisi ac neque. Maecenas convallis ligula <br /> metus, ac viverra magna egestas mollis. Etiam sed tortor vel purus <br /> aliquam faucibus. Pellentesque vel nisi pharetra, euismod sapien <br /> et, volutpat nulla. In congue maximus malesuada.</p>
          </div>

          <div className='lg:ml-auto shadow-cyan-400 shadow-lg w-fit'>
            <video src='https://res.cloudinary.com/diia5ubng/video/upload/v1743843118/waterv_jwxmkr.mp4' type='video/mp4' width={500} height={500} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className='rounded-[12px]'/>
          </div>
        </div>

        {/* Read More */}
        <div className='pt-8 flex items-center justify-center'>
        <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake cursor-pointer">
          <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-cyan-600"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-50 group-hover:-rotate-180 ease"></span>
          <span className="relative text-sm font-lato text-white hover:text-black">Read More</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"></span>
        </button>
        </div>
        

        {/* whats inside the water */}
        <div className='py-12'>
          <h1 className='text-center text-zinc-600 font-lato text-xl'>What's inside</h1>
          <div className='flex items-center justify-center gap-5 py-5'>
            <Image src='/image/linebg.png' width={100} height={100} alt='image'/>
            <h1 className='text-cyan-600 text-2xl lg:text-3xl font-bold tracking-[5px] font-lato'>Mineral Composition</h1>
          </div>


          {/* whats inside d water  */}
          <div className='grid grid-cols-1 gap- lg:flex items-center justify-between gap-10 font-lato relative'>
            {/* 1 */}
            <div className='pt-4'>
              {/* Ca */}
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-cyan-800 font-bold'>Calcium</h1>
                <p className='text-xl text-cyan-600 font-semibold'>5-12 mg/dm3</p>

                <p 
                data-aos="fade-right"
                data-aos-duration="1000"
                className='pt-3'>Calcium in the range of 5–12 mg/dm³ <br /> plays a vital role in maintaining strong <br /> bones and teeth, supporting muscle <br /> function, and aiding nerve transmission. </p>
              </div>

              {/* Mg */}
              <div className='py-5 flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-cyan-800 font-bold'>Magnesium</h1>
                <p className='text-xl text-cyan-600 font-semibold'>2-5 mg/dm3</p>

                <p 
                data-aos="fade-right"
                data-aos-duration="1000"
                className='pt-3'>Magnesium present at levels of 2–5 mg/dm³ <br /> is essential for maintaining healthy muscle <br /> and nerve function, supporting heart health, <br /> and aiding energy production in the body.</p>
              </div>

              {/* Na */}
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-cyan-800 font-bold'>Sodium</h1>
                <p className='text-xl text-cyan-600 font-semibold'>20-25 mg/dm3</p>

                <p 
                data-aos="fade-right"
                data-aos-duration="1000"
                className='pt-3'>Sodium at levels of 20–25 mg/dm³ <br /> plays a key role in maintaining fluid <br /> balance, supporting nerve function, <br /> and regulating blood pressure in the body.</p>
              </div>
            </div>

            



            {/* 2 image  */}
            <div className='flex flex-col justify-center items-center'>
              <div>
                <Image src='/image/cway.png' width={200} height={200} alt='image' className=''/>
              </div>

              {/* for big screen lg: */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
               }}

               transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
               }}
                className='absolute top-[7rem] right-[37rem] hidden lg:flex'>
                <Image src='/image/bottled.png' width={120} height={120} alt='image' />
              </motion.div>


              {/* for tablet screen md: */}
              <motion.div 
                animate={{
                  y: [0, -10, 0],
               }}

               transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
               }}
               className='absolute bottom-[36rem] right-[18rem] hidden md:flex lg:hidden'
                >
                <Image src='/image/bottled.png' width={120} height={120} alt='image' />
              </motion.div>

              {/* for phone screen */}
              <motion.div 
                animate={{
                  y: [0, -10, 0],
               }}

               transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
               }}
                className='absolute bottom-[36rem] right-[12rem] flex md:hidden lg:hidden'>
                <Image src='/image/bottled.png' width={120} height={120} alt='image' />
              </motion.div>

              {/* <Image src='/image/ice.png' width={100} height={100} alt='image' className='absolute bottom-[5rem] right-[30rem] animate-pulse'/> */}
            </div>



            {/* 3 */}
            <div>
              {/* Cl */}
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-cyan-800 font-bold'>Chlorine</h1>
                <p className='text-xl text-cyan-600 font-semibold'>46 mg/dm3</p>

                <p 
                data-aos="fade-left"
                data-aos-duration="1000"
                className='pt-3'>Chlorine at approximately 46 mg/dm³ <br /> is crucial for ensuring safe and clean <br /> drinking water by effectively eliminating <br /> harmful bacteria, viruses, and other pathogens. </p>
              </div>

              {/*Sourness */}
              <div className='py-5 flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-cyan-800 font-bold'>Sourness</h1>
                <p className='text-xl text-cyan-600 font-semibold'>6,8-7,3</p>

                <p 
                data-aos="fade-left"
                data-aos-duration="1000"
                className='pt-3'>The pH level of drinking water is typically between <br /> 6.8 and 7.3, plays a vital role in maintaining its taste, <br /> safety  and overall balance. </p>
              </div>

              {/* minirization */}
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-cyan-800 font-bold'>Mineralization</h1>
                <p className='text-xl text-cyan-600 font-semibold'>90-140 mg/dm3</p>

                <p 
                data-aos="fade-left"
                data-aos-duration="1000"
                className='pt-3'>Mineralization at a balanced level of 90–140 mg/dm³ <br /> reflects the total amount of essential minerals like <br /> calcium, magnesium, and sodium present in drinking <br /> water.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blue WAVE bg */}
      <div className='grid grid-cols-2 lg:flex items-center px-[1rem] md:px-[3rem] justify-between text-white bg-no-repeat bg-cover h-[70vh] lg:h-[50vh]' style={{ backgroundImage: "url('/image/wave.svg')"}}>
          {/* 1 */}
          <div>
            <Image src='/image/b1.png' width={100} height={100} alt='image'/>
            <p className='text-2xl font-bold pt-4'>Full Control</p>
          </div>

          {/* 2 */}
          <div>
            <Image src='/image/b2.png' width={100} height={100} alt='image'/>
            <p className='text-2xl font-bold pt-10 text-black lg:text-white'>Healthy Composition</p>
          </div>

          <div>
            <Image src='/image/b3.png' width={100} height={100} alt='image'/>
            <p className='text-2xl font-bold pt-4'>6 Filtration Stages</p>
          </div>

          <div>
            <Image src='/image/b4.png' width={100} height={100} alt='image'/>
            <p className='text-2xl font-bold pt-4'>Quality certificates</p>
          </div>
      </div>
    </>
  )
}

export default Hero2
