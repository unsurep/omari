import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { ImMenu } from "react-icons/im";

const Navbar=()=>{
    return(
        <>
           
            {/* desktop navbar */}
            <nav className="font-inter hidden lg:flex items-center justify-between px-[1rem] md:px-[3rem]  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white w-full z-50 fixed">
                <Link href='/' className=" font-bold py-3">
                    <div>
                        <Image src='/image/newlogobg.png' width={100} height={100} alt='omari premium water logo' />
                    </div>

                    <h1>Omari Premium Water</h1>
                </Link>

                <ul className="flex items-center gap-10">
                    <li className="hvr-underline-reveal cursor-pointer hover:font-bold">Home</li>
                    <li className="hvr-underline-reveal cursor-pointer hover:font-bold">About</li>
                    <li className="hvr-underline-reveal cursor-pointer hover:font-bold">Services</li>
                    <li className="hvr-underline-reveal cursor-pointer hover:font-bold">Blog</li>
                    <li className="hvr-underline-reveal cursor-pointer hover:font-bold">Contact</li>
                </ul>

                <ul className="flex items-center gap-2 text-gray-500">
                    <li className="text-2xl animate-bounce text-black/90"><RiCustomerService2Fill /></li>
                    <li className="hover:text-black/90">0817-410-2489 </li>
                    <li>||</li>
                    <li className="hover:text-black/90">0803-814-0408</li>
                </ul>



            </nav>

            {/* phone navbar view */}
            <nav className="font-inter lg:hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white w-full z-50 fixed px-[1rem] flex items-center justify-between py-3">
                <Link href='/'>
                    <div>
                        <Image src='/image/newlogobg.png' width={100} height={100} alt="logo"/>
                    </div>
                </Link>

                <div className="text-3xl">
                    <ImMenu />
                </div>

            </nav>
        </>
    )




};
export default Navbar;