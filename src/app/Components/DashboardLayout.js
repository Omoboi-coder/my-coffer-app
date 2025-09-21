'use client'
import React, { useState, useEffect } from 'react'
import LeftCon from './LeftCon'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { usePathname } from 'next/navigation'

const DashboardLayout = ({ children }) => {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const navItems = [
    {
      href: '/dashboard',
      icon: '/Images/element-3 (2).svg',
      activeIcon: '/Images/element-3 colored(2).svg',
      label: 'Dashboard'
    },
    {
      href: '/activity',
      icon: '/Images/activity.svg',
      activeIcon: '/Images/activity colored.svg',
      label: 'Activity'
    },
    {
      href: '/schedule',
      icon: '/Images/calendar-2.svg',
      activeIcon: '/Images/calender-2 colored.svg',
      label: 'Schedule'
    },
    {
      href: '/members',
      icon: '/Images/people.svg',
      activeIcon: '/Images/people colored.svg',
      label: 'Members'
    },
    {
      href: '/payouts',
      icon: '/Images/money-send.svg',
      activeIcon: '/Images/money-send colored.svg',
      label: 'Payouts'
    }
  ]

  return (
    <section className='bg-coffer-dark min-h-screen flex flex-col'>
      {/* Mobile navbar - only shows on small screens */}
      <nav className='md:hidden bg-growtoken-dark'>
        <div className='flex px-5 pt-5 pb-6 justify-between'>
          <Link href="/">
          <div className="flex">
            <Image
              src="/Images/Logo+Name.svg"
              alt="Logo"
              width={170}
              height={36}
              className="w-[170px] h-[36px] md:w-[227px] md:h-[48px]"
            />
          </div>
          </Link>
          <Menu />
        </div>
      </nav>

      <div className='flex flex-col md:flex-row 2xl:mx-auto w-full h-full flex-1
       gap-5 2xl:gap-10 md:w-[1350px] 2xl:w-[1400px] md:h-[1000px] bg-coffer-dark overflow-hidden'>
        
        <div className='md:block hidden'>
          <LeftCon />
        </div>

        <div className='flex-1 md:flex-1 w-full h-full overflow-y-auto'>
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation - only shows on mobile */}
      <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-[#282828] z-50'>
        <div className='flex justify-around items-center py-2'>
          {navItems.map((item) => {
            // Only check for active state after client hydration
            const isActive = isClient && pathname === item.href
            
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className='flex flex-col items-center py-2 px-3'
              >
                <div className='w-6 h-6 mb-1'>
                  <Image
                    src={isActive ? item.activeIcon : item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />          
                </div>
                <p className={`text-xs cursor-pointer ${isActive ? 'text-[#63D9B9]' : 'text-white'}`}>
                  {item.label}
                </p>
              </Link>
            )
          })}
        </div>
      </nav>
    </section>
  )
}

export default DashboardLayout