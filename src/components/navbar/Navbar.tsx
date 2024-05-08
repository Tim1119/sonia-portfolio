"use client"
import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import navbarLinks from '../../utils/navbarLinks';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface NavlinkDataType {
   name:string;
   href:string;
}

const Navbar = () => {
  const pathname = usePathname()
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [showSidebar,setShowSidebar] = useState(false) 

  useEffect(() => {
    const toggleNavbarShadow = () => {
      if (window.scrollY >= 90) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };
    window.addEventListener("scroll", toggleNavbarShadow);
  }, []);

  const closeSidebar = () => {
  setShowSidebar(false);
  };

  return (
    <>

      {/* Desktop Mobile */}
      <header className={`font-serif bg-black h-[70px] w-full z-10 ease-in-out duration-300  ${navbarShadow ? "shadow-xl" : "shadow-none"} fixed top-0`  } >
        <nav className="flex items-center justify-between h-full container max-w-7xl mx-auto" >
          {/* Logo */}
            <div>
            <Image src="/logo/logo.jpeg" width={140}height={20} alt="Logo" priority />

            </div>
            <div>
              <ul className="hidden md:flex gap-5">
                {navbarLinks.map((navLink:NavlinkDataType,index:number)=>(
                  <Link href={navLink.href} key={index}>
                    <li className={` text-base capitalize hover:text-lemon font-semibold ${pathname === navLink.href ? 'active-link' : ' text-white'} `}>{navLink.name}</li>
                  </Link>
                ))}
              </ul>
              <div onClick={() => setShowSidebar(!showSidebar)} className="md:hidden">
                {/* {showSidebar ? <AiOutlineClose className="text-white" size={25} /> : <AiOutlineMenu className="text-white" size={25} />} */}
                {showSidebar ? "" : <AiOutlineMenu className="text-white cursor-pointer" size={25} />}
              </div>
            </div>
        </nav>

        <div className={showSidebar ? "fixed left-0 top-0 w-full h-screen bg-black/70" : "hidden"} onClick={closeSidebar}></div>
        <nav className={`md:hidden border-right fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-black/90 p-10 transition ease-in-out duration-500 transform ${showSidebar ? '-translate-x-0' : '-translate-x-full'}`}>
          {/* Nav content */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h3 className="text-white font-bold uppercase font-script text-3xl">
              <span className="text-green-600">Executive</span> <span className="text-white">Zen</span>
            </h3>
            <div onClick={closeSidebar} className="md:hidden">
              <AiOutlineClose className="text-white cursor-pointer" size={25} />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              {navbarLinks.map((navLink:NavlinkDataType,index:number) => (
                <Link href={navLink.href} key={index} onClick={closeSidebar}>
                  <li className={`px-2 py-2 text-base capitalize hover:text-lemon font-semibold ${pathname === navLink.href ? 'active-link bg-lemon text-white rounded-sm' : ' text-green-400'} `} >{navLink.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>

      </header>


      
    </>
  );
};

export default Navbar;
