import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

const Navbar = () => {
  return (
    <>
      {/* Nav bar container */}
      <nav className='bg-coffer-dark md:w-[1,728px] relative overflow-hidden'>
        {/* Flex container */}
        <div className="flex flex-row relative mx-auto w-full h-[48px] md:w-[1350px] xl:w-[1728px] 2xl:w-[1728px] justify-between 
        pt-15 px-8 md:pt-20 md:px-30 2xl:px-35 items-end">
          
          {/* nav Logo */}
          <div className="flex flex-row ">
            <Image
              src="/Images/Logo+Name.svg"
              alt="Logo"
              width={30}
              height={10}
              className="w-[170px] h-[36px] md:w-[227px] md:h-[48px]"
             />
          </div>
          {/* HamburgerMenu  */}
          <Image
            src="/Images/menu.svg"
            alt="Logo"
            width={24}
            height={24}
            className="flex md:hidden w-[24px] h-[24px] mb-1"
         />

            {/* Navigation links (Desktop) */}
            <div className="hidden md:flex text-white text-[16px] gap-[64px] md:mr-75 2xl:mr-20">
              <Link href="/Payment" className=" hover:text-[#63D9B9]">Products</Link>
              <Link href="/Expertise" className=" hover:text-[#63D9B9]">Ecosystem</Link>
              <Link href="/Features" className=" hover:text-[#63D9B9]">Chainlink</Link>
              <Link href="/AboutUs" className=" hover:text-[#63D9B9]">About Us</Link>
            </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar