import React from 'react'
import Image from 'next/image'
import { MdOutlineDone } from "react-icons/md";

const Hero4 = () => {
  return (
    <>
        <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            className=' px-[1rem] md:px-[3rem]  text-white bg-no-repeat bg-cover h-screen' style={{ backgroundImage: "url('/image/wave.svg')"}}>
            <div className='grid grid-cols-1 gap-8 md:flex items-center justify-between'>
                {/* dispatch bike */}
                <div 
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    >
                    <Image src='/image/bike.png' width={500} height={500} alt='image'/>
                </div>

                {/* other div */}
                <div className='text-black pt-16'>
                    <h1 className='text-5xl md:text-3xl  lg:text-5xl font-bold text-white text-center md:text-cyan-600'>Ready To Get Our <br /> Premium Water <br /> Delivery Service.</h1>
                    
                    <div className='flex flex-col pt-8 text-white md:text-black gap-5'>
                        <div className='text-xl font-bold flex items-center mx-auto gap-3'><MdOutlineDone /> Free Delivery <span className='text-zinc-400 text-sm'>(T & C applies)</span></div>
                        <div className='text-xl font-bold flex mx-auto items-center gap-3 lg:text-white'><MdOutlineDone /> 7 Days In A Week Service</div>
                    </div>
                </div>
            </div>



            {/* BUTTONS PLACE ORDER / CONTACT US */}
            <div className="text-xs lg:flex items-center gap-8 hidden justify-center ">
                {/* PLACE ORDER */}
                {/* <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake cursor-pointer">
                    <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-cyan-600"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-50 group-hover:-rotate-180 ease"></span>
                    <span className="relative text-sm font-lato text-white hover:text-black uppercase">Order Now</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"></span>
                </button> */}


                {/* CONTACT US */}
                {/* <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake cursor-pointer">
                    <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-cyan-600 group-hover:-rotate-180 ease"></span>
                    <span className="relative text-sm font-lato hover:text-white">CONTACT US</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                data-rounded="rounded-lg"></span>
                </button> */}
            </div>






        </div> 
    </>
  )
}

export default Hero4
