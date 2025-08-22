import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      {/* Nav bar container */}
      <nav>
        {/* Flex container */}
        <div className="flex flex-row relative mx-auto w-full h-[48px] md:w-[1350px] justify-between 
        pt-22 px-8 md:pt-20 md:px-20 items-end">
          
          {/* nav Logo */}
          <div className="flex">
            <Image
              src="/Images/Logo+Name.svg"
              alt="Logo"
              width={30}
              height={10}
              className="w-[170px] h-[36px] md:w-[227px] md:h-[48px]"
             />
          </div>
          
            {/* Navigation links (Desktop) */}
            <div className="hidden md:flex text-white text-[16px] gap-[64px]">
              <Link href="#" className=" hover:text-red-500">Products</Link>
              <Link href="#" className=" hover:text-red-500">Ecosystem</Link>
              <Link href="#" className=" hover:text-red-500">Chainlink</Link>
              <Link href="#" className=" hover:text-red-500">About Us</Link>
            </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar