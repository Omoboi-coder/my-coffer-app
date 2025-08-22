import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section id='hero' className='bg-coffer-dark md:w-[1,728px] md:h-[1117px] relative overflow-hidden'>
        {/* Custom background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
          style={{
            backgroundImage: "url('/Images/Group (2).svg')"
          }}
        />
        
        {/* Content container with higher z-index */}
        <div className="relative z-10">
          <Navbar />
          {/* flex container */}
          <div className='flex flex-col mx-auto w-[336px] h-[625px] md:w-[1062px] md:h-[648px] 
           gap-[48px] md:gap-[56px] items-center text-white mt-20 md:mt-35'>
              {/* item 1 */}
              <div className=' flex flex-row bg-item1-gradient w-[336px] h-[40px] md:w-[670px] md:h-[80px] border
              rounded-[8px] gap-[10px] text-white p-[20px] text-[12px] md:text-[24px]  items-center justify-center'>
                  <Image
                  src="/Images/Frame 172.svg"
                  alt="PayCheck Logo"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
                  />
                  <p>Streamline Your Payroll Process with <span className='text-[#63D9B9]'>PayCheck</span></p>

              </div>
              {/* item 2 */}
              <div className='flex flex-col h-[388px] md:h-[400px] gap-[36px] md:gap-[48px] text-white items-center'>
                  <h1 className='h-[192px] md:h-[256px] text-[56px] md:text-[120px] text-center leading-[1]'>
                    Simplifying Salary Payments
                    </h1>
                  <p className='w-[336px] md:w-[965px] h-[160px] md:h-[96px] text-[16px] md:text-[24px] text-center px-4 md:px-15' >
                      We understand the importance of timely and accurate salary payments. That&#39;s why we&#39;ve designed 
                      a cutting-edge financial platform to make payroll management a breeze for your business
                  </p>

              </div>
              <Link href="#" className='flex justify-center items-center'>
              <button className='bg-[#63D9B9] w-[189px] h-[56px]  gap-[10px] rounded-[8px] text-[16px] text-[#010101]'>
                  Launch App
            </button>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Hero