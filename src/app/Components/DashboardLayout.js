import React from 'react'
import LeftCon from './LeftCon'
import Image from 'next/image'

const DashboardLayout = ({ children }) => {
  return (
    <section className='bg-coffer-dark h-[932px] flex flex-col'>
      {/* Mobile navbar - only shows on small screens */}
      <nav className='md:hidden bg-growtoken-dark'>
        <div className='flex px-7 pt-6 pb-4 justify-between'>
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
      <div className='flex flex-col md:flex-row 2xl:mx-auto w-full flex-1
       gap-5 md:w-[1350px] md:h-[1000px] bg-coffer-dark overflow-hidden'>
        
        {/* LeftCon - only shows on desktop */}
        <div className='md:block hidden'>
          <LeftCon />
        </div>

        {/* Right side content - with bottom padding on mobile for nav */}
        <div className='flex-1 md:flex-1 w-full min-h-full pb-20 md:pb-0'>
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation - only shows on mobile */}
      <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-growtoken-dark border-t border-gray-700 z-50'>
        <div className='flex justify-around items-center py-2'>
          
          {/* Dashboard */}
          <button className='flex flex-col items-center py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
            <span className='text-xs text-blue-400'>Dashboard</span>
          </button>

          {/* Activity */}
          <button className='flex flex-col items-center py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H19V4h-3V2h-2v2H8V2H6v2H3v2h16.5z"/>
              </svg>
            </div>
            <span className='text-xs text-gray-400'>Activity</span>
          </button>

          {/* Revenue */}
          <button className='flex flex-col items-center py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className='text-xs text-gray-400'>Revenue</span>
          </button>

          {/* Mentees */}
          <button className='flex flex-col items-center py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.41 3.22A1 1 0 0 0 12.4 14l2.6-3.5V22h5z"/>
              </svg>
            </div>
            <span className='text-xs text-gray-400'>Mentees</span>
          </button>

          {/* Payouts */}
          <button className='flex flex-col items-center py-2 px-3'>
            <div className='w-6 h-6 mb-1'>
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <span className='text-xs text-gray-400'>Payouts</span>
          </button>
        </div>
      </nav>
    </section>
  )
}

export default DashboardLayout