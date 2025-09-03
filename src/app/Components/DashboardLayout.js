import React from 'react'
import LeftCon from './LeftCon'
import Image from 'next/image'
import Link from 'next/link'
const DashboardLayout = ({ children }) => {
  return (
    <section className='bg-coffer-dark min-h-screen flex flex-col'>
      {/* Mobile navbar - only shows on small screens */}
      <nav className='md:hidden bg-growtoken-dark'>
        <div className='flex px-5 pt-5 pb-6 justify-between'>
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
          {/* Hamburger Menu */}
            <Image
              src="/Images/menu.svg"
              alt="Logo"
              width={24}
              height={24}
              className='mt-1'
            />
        </div>
      </nav>

      {/* Main content area */}
      <div className='flex flex-col md:flex-row 2xl:mx-auto w-full h-full flex-1
       gap-5 md:w-[1350px] md:h-[1000px] bg-coffer-dark overflow-hidden'>
        
        {/* LeftCon - only shows on desktop */}
        <div className='md:block hidden'>
          <LeftCon />
        </div>

        {/* Right side content - with bottom padding on mobile for nav */}
        <div className='flex-1 md:flex-1 w-full h-full pb-20 md:pb-0'>
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation - only shows on mobile */}
      <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-[#282828] z-50'>
        <div className='flex justify-around items-center py-2'> 
          {/* Dashboard */}
          <Link href="/dashboard" className='flex flex-col items-center py-2 px-3'>
          <div className='w-6 h-6 mb-1'>
            <Image
              src="/Images/element-3 (2).svg"
              alt="Logo"
              width={24}
              height={24}
              className='text-[#63D9B9]'
            />          
          </div>
          <p className='text-xs text-[#63D9B9] cursor-pointer'>Dashboard</p>
        </Link>

          {/* Activity */}
          <Link href="/activity" className='flex flex-col items-center text-white py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
             <Image
                src="/Images/activity.svg"
                alt="Logo"
                width={24}
                height={24}
                className='text-[#63D9B9]'
                />          
            </div>
            <p className='text-xs cursor-pointer'>Activity </p>
          </Link>

          {/* schedule */}
          <Link href="/schedule" className='flex flex-col items-center text-white py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
              <Image
                src="/Images/calendar-2.svg" people
                alt="Logo"
                width={24}
                height={24}
                className='text-[#63D9B9]'
                />
            </div>
            <p className='text-xs cursor-pointer'>Schedule</p>
          </Link>

          {/* Members */}
          <Link href="/members" className='flex flex-col items-center text-white py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
                <Image
                src="/Images/people.svg"
                alt="Logo"
                width={24}
                height={24}
                className='text-[#63D9B9]'
                />
            </div>
             <p className='text-xs cursor-pointer'>Members</p>
          </Link>

          {/* Payouts */}
          <Link href="/Payouts" className='flex flex-col items-center text-white py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
              <Image
                src="/Images/money-send.svg"
                alt="Logo"
                width={24}
                height={24}
                className='text-[#63D9B9]'
                />
            </div>
            <p className='text-xs cursor-pointer'>Payouts</p>
          </Link>
        </div>
      </nav>
    </section>
  )
}

export default DashboardLayout