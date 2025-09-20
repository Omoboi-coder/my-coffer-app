"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  // Close menu when clicking on links
  const handleLinkClick = () => {
    setOpenMenu(false);
  }

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <section className='flex md:hidden'>
      <Image
        src="/Images/menu.svg"
        alt="Menu"
        width={24}
        height={24}
        className="mt-1.5 w-[24px] h-[24px] cursor-pointer"
        onClick={toggleMenu}
      />
      
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0  bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
   {/* Menu container with slide animation */}
<div
  className={`fixed top-0 right-0 h-full w-full max-w-[80%] bg-[#282828] shadow-lg z-50 
  p-10 transition-transform duration-300 ease-in-out
  ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}
>
  {/* Wrap menu content with fade animation */}
  <div
    className={`transition-opacity duration-500 delay-200 ${
      openMenu ? 'opacity-100' : 'opacity-0'
    }`}
  >
    {/* Close button */}
    <button
      onClick={toggleMenu}
      className="absolute top-4 right-4 text-white p-2"
    >
      <Image
        src="/Images/cancel icon.svg"
        alt="Close menu"
        width={24}
        height={24}
      />
    </button>

    {/* address */}
    <div className="flex flex-row w-[170px] h-[48px] text-[14px] text-white 
    rounded-[8px] mt-10 ml-5 py-3 px-3 gap-2 bg-[#4A4A4A]">
      <Image
        src="/Images/MetaMask - jpeg 0.svg"
        alt=""
        width={24}
        height={24}
      />
      <p className="mt-0.5">ADGJ163738JKJK</p>
    </div>

    {/* container */}
    <div className="flex flex-col w-[188px] h-[168px] space-y-7 mx-auto mt-14">
      {/* Profile */}
      <div
        className={`flex flex-row gap-2 w-[133px] h-[32px] items-center
        transform transition-all duration-500 delay-200
        ${openMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <Image src="/Images/profile-circle.svg" alt="Logo" width={24} height={24} />
        <Link
          href="/profile"
          className="text-[16px] text-white cursor-pointer"
          onClick={handleLinkClick}
        >
          Profile
        </Link>
      </div>

      {/* Notification */}
      <div
        className={`flex flex-row gap-2 w-[133px] h-[32px] items-center
        transform transition-all duration-500 delay-300
        ${openMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <Image src="/Images/notification-bing.svg" alt="Logo" width={24} height={24} />
        <Link
          href="/notification"
          className="text-[16px] text-white cursor-pointer"
          onClick={handleLinkClick}
        >
          Notification
        </Link>
      </div>

      {/* Settings */}
      <div
        className={`flex flex-row gap-2 w-[133px] h-[32px] items-center
        transform transition-all duration-500 delay-400
        ${openMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <Image src="/Images/setting-2.svg" alt="Logo" width={24} height={24} />
        <Link
          href="/settings"
          className="text-[16px] text-white cursor-pointer"
          onClick={handleLinkClick}
        >
          Settings
        </Link>
      </div>
    </div>

    {/* attendance link */}
    <div
      className={`flex flex-row w-[170px] h-[20px] ml-5 mt-8 justify-between
      transform transition-all duration-500 delay-500
      ${openMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <p className=" text-[14px] text-white opacity-85">Attendance Link</p>
      <Image src="/Images/copy.svg" 
      alt=""
       width="16" 
       height="16"
      className='w-[16px] h-[16px]' 
      />
    </div>
  </div>
</div>

    </section>
  )
}

export default Menu