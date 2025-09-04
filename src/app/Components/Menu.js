"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu (!openMenu);
  }

return (
    <section className='flex md:hidden'>
        <Image
            src="/Images/menu.svg"
            alt="Logo"
            width={24}
            height={24}
            className="mt-1.5"
            onClick={toggleMenu}
        />
        {openMenu && (
            <div className="w-[265px] h-[350px] absolute top-15 right-2 bg-[#282828] shadow-lg rounded-xl p-2 z-50">
                {/* address */}
                <div className="flex flex-row w-[170px] h-[48px] text-[14px] text-white rounded-[8px] mt-5 ml-5 py-3 px-3 gap-2 bg-[#4A4A4A]">
                    <Image
                        src="/Images/MetaMask - jpeg 0.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                    <p className="mt-0.5">ADGJ163738JKJK</p>
                </div>
                {/*  container */}
                <div className="flex flex-col w-[188px] h-[168px] space-y-7 mx-auto mt-8">
                    {/* Profile */}
                    <div className="flex flex-row gap-2 w-[133px] h-[32px] items-center">
                        <Image
                            src="/Images/profile-circle.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                        <Link href="/profile" className="text-[16px] text-white cursor-pointer">
                            Profile
                        </Link>
                    </div>
                    {/* Notification */}
                    <div className="flex flex-row gap-2 w-[133px] h-[32px] items-center">
                        <Image
                            src="/Images/notification-bing.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                        <Link href="/notification" className="text-[16px] text-white cursor-pointer">
                            Notification
                        </Link>
                    </div>
                    {/* Settings */}
                    <div className="flex flex-row gap-2 w-[133px] h-[32px] items-center">
                        <Image
                            src="/Images/setting-2.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                        />
                        <Link href="/settings" className="text-[16px] text-white cursor-pointer">
                            Settings
                        </Link>
                    </div>
                </div>
                 {/* attendance link */}
                  <div className='flex flex-row w-[170px] h-[20px] ml-5 mt-6 justify-between'>
                  <p className=' text-[14px] text-white opacity-85'>Attendance Link</p>
                  <Image
                  src="/Images/copy.svg"
                  alt=''
                  width="16"
                  height="16"
                  />
                  </div>
            </div>
        )}
    </section>
)
}

export default Menu