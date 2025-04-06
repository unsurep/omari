'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextTransition, { presets } from 'react-text-transition';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';




const TEXTS = ["Pure & Healthy", "Natural & Pure", "Pure & Healthy","Natural & Pure" ];

const Hero1=()=>{

      // AOS animation
  useEffect(() =>{
    AOS.init({
      disable: false,
      animatedClassName: 'aos-animate',
      useClassNames: false,
      duration: 400,
      easing: 'ease',
      once: false,
      anchorPlacement: 'top-bottom',
    });
  
  }, [])




    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((prev) => (prev + 1) % TEXTS.length);
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, []);




    return (
        <section id="hero1" className="py-28 md:py-36 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image/bg1.avif')"}}>
            <div className="grid grid-cols-1 md:flex items-center justify-between px-[1rem] lg:px-[3rem] relative">
                <div data-aos="fade-right" data-aos-duration="2000" className="font-lato flex flex-col gap-2 md:gap-5 items-center justify-center">
                    <h3 className="text-[10px] md:text-xs bg-white text-cyan-600/90 w-fit px-4 py-1 rounded-full">MINERAL COMPOSITION</h3>
                    
                    <div className="pt-3 lg:flex lg:flex-col lg:gap-2">
                     <TextTransition springConfig={presets.slow} className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-800 ">{TEXTS[index % TEXTS.length]}
                     </TextTransition>
                     <h1 className="text-2xl md:text-4xl text-zinc-800  lg:text-5xl font-bold">Drinking Water</h1>
                    </div>


                    {/* BUTTONS ABOUT / CONTACT US */}
                    <div className="text-xs lg:flex items-center gap-8 hidden ">
                        {/* ABOUT US */}
                        <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake cursor-pointer">
                            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-cyan-600"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-50 group-hover:-rotate-180 ease"></span>
                            <span className="relative text-sm font-lato text-white hover:text-black">ABOUT US</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                data-rounded="rounded-lg"></span>
                        </button>


                        {/* CONTACT US */}
                        <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake cursor-pointer">
                            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-cyan-600 group-hover:-rotate-180 ease"></span>
                            <span className="relative text-sm font-lato hover:text-white">CONTACT US</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                                data-rounded="rounded-lg"></span>
                        </button>
                    </div>
                </div>

                {/* picture with 3 ice for desktop view*/}
                <div data-aos="zoom-out-left" data-aos-offset="200"         data-aos-duration="2000" data-aos-easing="ease-in-out" className="hidden md:hidden lg:flex ">
                    <Image src='/image/omaribg1.png' width={500} height={500} alt="omari-water-image" className="rounded-lg"/>
                </div>


                {/* picture with 3 ice for tablet view*/}
                <div data-aos="zoom-out-left" data-aos-offset="200"         data-aos-duration="2000" data-aos-easing="ease-in-out" className="hidden lg:hidden md:flex">
                    <Image src='/image/omaribg1.png' width={300} height={300} alt="omari-water-image" className="rounded-lg"/>
                </div>




                 {/* picture with 3 ice for phone view*/}
                 <div data-aos="zoom-out-left" data-aos-offset="200" data-aos-duration="2000" data-aos-easing="ease-in-out" className="flex items-center justify-center pt-3 md:hidden">
                    <Image src='/image/omaribg1.png' width={200} height={200} alt="omari-water-image" className="rounded-lg"/>
                </div>

               



                {/* just the ice */}
                <div className="absolute bottom-0 right-0 bounce-top ">
                    <Image src='/image/ice.png' width={100} height={100} alt="omari-water-image" className="rounded-lg animate-pulse"/>
                </div>

                <div className="absolute bottom-0 left-0 animate-pulse">
                    <Image src='/image/ice.png' width={100} height={100} alt="omari-water-image" className="rounded-lg  bounce-top"/>
                </div>
            </div>

            <div className="lg:hidden gap-5 flex items-center justify-center pt-4 md:pt-12">
                <button className="py-1 border border-black px-4 bg-cyan-400 text-white font-lato rounded-full">About Us</button>
                <button className="py-1 px-4 bg-white border border-black font-lato rounded-full">Contact Us</button>
            </div>

           
        </section>
    )
};
export default Hero1;


