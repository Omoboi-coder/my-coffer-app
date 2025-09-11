import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [titleRef, titleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' })
  const [buttonRef, buttonVisible] = useScrollAnimation({ rootMargin: '-150px 0px' })

  return (
    <section id='hero' className='bg-coffer-dark md:w-[1,728px] md:h-[770px] relative overflow-hidden'>
        {/* Custom background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
          style={{
            backgroundImage: "url('/Images/Group (2).svg')"
          }}
        />
        
          {/* flex container */}
          <div ref={heroRef} className={`flex flex-col mx-auto w-[336px] h-[575px] md:w-[1062px] md:h-[648px] 
           gap-[30px] md:gap-[56px] items-center text-white mt-10 md:mt-15 z-50 transition-all duration-1000 ease-out
           ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* item 1 - Banner */}
              <div className={`flex flex-row bg-hero-gradient w-[336px] h-[40px] md:w-[670px] md:h-[80px] border
              rounded-[8px] gap-[10px] text-white p-[15px] text-[12px] md:text-[24px] items-center justify-center z-20
              transition-all duration-800 delay-200 ease-out
              ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <Image
                  src="/Images/Frame 172.svg"
                  alt="PayCheck Logo"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
                  />
                  <p>Streamline Your Payroll Process with <span className='text-[#63D9B9]'>PayCheck</span></p>
              </div>

              {/* item 2 - Main Title */}
              <div ref={titleRef} className={`flex flex-col h-[388px] md:h-[400px] gap-[36px] md:gap-[48px] text-white items-center z-20
              transition-all duration-1000 delay-400 ease-out
              ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h1 className='h-[192px] md:h-[256px] text-[56px] md:text-[120px] text-center leading-[1]'>
                    Simplifying Salary Payments
                  </h1>
                  <p className='w-[336px] md:w-[965px] h-[160px] md:h-[96px] text-[16px] md:text-[24px] text-center px-4 md:px-15'>
                      We understand the importance of timely and accurate salary payments. That&apos;s why we&apos;ve designed 
                      a cutting-edge financial platform to make payroll management a breeze for your business
                  </p>
              </div>

              {/* CTA Button */}
              <Link href="dashboard" className='flex justify-center items-center z-20'>
              <button ref={buttonRef} className={`bg-[#63D9B9] w-[189px] h-[56px] gap-[10px] rounded-[8px]
               text-[16px] text-[#010101] cursor-pointer transition-all duration-600 delay-600 ease-out
               hover:scale-105 hover:shadow-lg hover:shadow-[#63D9B9]/25
               ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                  Launch App
              </button>
              </Link>
          </div>
    </section>
  )
}

export default Hero
