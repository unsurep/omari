import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
  return (
      <>
        <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          className='px-[1rem] md:px-[3rem] py-12'>
            <h1 className='text-center text-zinc-600 font-lato'>Our Products</h1>
            <div className='flex items-center justify-center gap-5 py-5'>
                <Image src='/image/linebg.png' width={100} height={100} alt='image'/>
                <h1 className='text-cyan-600 text-xl md:text-2xl lg:text-3xl font-bold tracking-[5px] font-lato text-center'>We delivered fresh to your door <br /> by our team.</h1>
            </div>

            
            {/* The Product 1*/}
            <div className='grid grid-cols-2 gap-6 lg:flex items-center justify-between pt-8'>
              {/* 1 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/owbg.png' width={200} height={200} alt='image'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>50Cl Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Time 4:30pm – 6:30pm</div>
                  <button className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</button>
                </div>
              </div>

              {/* 2 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/owbg.png' width={200} height={200} alt='image'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>1 Ltr Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Time 4:30pm – 6:30pm</div>
                  <button className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</button>
                </div>
              </div>

              {/* 3 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/owbg.png' width={200} height={200} alt='image'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>O-way Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Tom 4:30pm – 6:30pm</div>
                  <button className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</button>
                </div>
              </div>

              {/* 4 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/owbg.png' width={200} height={200} alt='image'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>2 Ltr Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Tom 4:30pm – 6:30pm</div>
                  <button className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</button>
                </div>
              </div>  
            </div>


             {/* The Product 2*/}
             <div className='grid grid-cols-2 gap-6 lg:flex items-center justify-between pt-16'>
              {/* 1 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/50clbg.png' width={200} height={200} alt='image' className='bg-transparent'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>2 Ltr Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Time 4:30pm – 6:30pm</div>
                  <button className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</button>
                </div>
              </div>

              {/* 2 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/50clbg.png' width={200} height={200} alt='image' className='bg-transparent'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>2 Ltr Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Time 4:30pm – 6:30pm</div>
                  <buttonc className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</buttonc>
                </div>
              </div>

              {/* 3 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/2Lbg.png' width={200} height={200} alt='image' className='bg-transparent'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>2 Ltr Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Time 4:30pm – 6:30pm</div>
                  <buttonc className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</buttonc>
                </div>
              </div>

              {/* 4 */}
              <div className='flex flex-col items-center justify-center gap-3 hover:bg-zinc-100 p-4 rounded-lg'>
                <div>
                  <Image src='/image/2Lbg.png' width={200} height={200} alt='image' className='bg-transparent'/>
                </div>
                <div className='text-cyan-500 font-bold text-2xl'>N0.00</div>
                
                <div className='flex flex-col items-center justify-center gap-1'>
                  <div className='text-xl font-semibold'>2 Ltr Bottled Water</div>
                  <div className='text-zinc-500'>Delivery Time 4:30pm – 6:30pm</div>
                  <buttonc className='bg-cyan-500 px-6 py-2 mt-4 hover:bg-cyan-300 hover:text-zinc-500 text-white cursor-pointer rounded-full'>Order Now</buttonc>
                </div>
              </div>
            </div>

            {/* pictures */}
            <div className='grid grid-cols-1 md:flex items-center justify-center gap-12 my-16'>
              <div 
                data-aos="flip-up"
                data-aos-duration="1000"
                className='flex items-center justify-center'>
                <Image src='/image/v1.png' width={350} height={350} alt='image' className='rounded-md'/>
              </div>

              <div 
                data-aos="flip-down"
                data-aos-duration="1000"
                className='flex items-center justify-center'>
                <Image src='/image/v2.jpg' width={350} height={350} alt='image' className='rounded-md'/>
              </div>

              <div 
                data-aos="flip-up"
                data-aos-duration="1000"
                className='flex items-center justify-center'>
                <Image src='/image/v3.jpg' width={350} height={350} alt='image' className='rounded-md'/>
              </div>
            </div>
        </div>
      </>
  )
}

export default Hero3
