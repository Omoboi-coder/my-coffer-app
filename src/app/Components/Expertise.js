import React from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Expertise = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [numbersRef, numbersVisible] = useScrollAnimation({ rootMargin: '-100px 0px' })
  const [contentRef, contentVisible] = useScrollAnimation({ rootMargin: '-50px 0px' })
  const [listRef, listVisible] = useScrollAnimation({ rootMargin: '-80px 0px' })

  return (
    <section id='expertise' className='bg-coffer-dark overflow-hidden'>
         {/* flex container */}
        <div className='flex flex-col mx-auto w-[430px] h-[990px] md:w-[1728px] md:h-[1326px] 
        relative z-10'>
        
        {/* Background overlay remains the same */}
         <div className="absolute z-0 opacity-100 right-0 md:right-50 left-[-12rem] 2xl:left-0
          top-[-2rem] md:top-0 w-[200%] h-[100%] md:w-[100%] md:h-[100%]"
          style={{
          backgroundImage: "url('/Images/Group (4).svg')",
          backgroundSize: 'contain',    
          backgroundRepeat: 'no-repeat',   
          backgroundPosition: 'center',                                                    
        }}
      /> 
      
            {/* Animated Header Section */}
            <div ref={headerRef} className={`flex flex-col w-[382px] h-[410px] md:w-[631px] md:h-[504px] 2xl:w-[731px] gap-7 md:gap-10 
            mx-auto md:mx-0 md:ml-[40rem] 2xl:ml-[55rem] mt-10 md:mt-8 text-white z-50
            transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                
                <h3 className={`text-[20px] md:text-[30px] 2xl:text-[45px] w-fit transition-all duration-600 delay-200 ease-out
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Our Expertise
                </h3>
                
                <h2 className={`text-[40px] leading-12 md:leading-20 mt-5 md:text-[58px] 2xl:text-[72px] w-[362px] h-[144px]
                 md:w-[631px] 2xl:w-[731px] md:h-[160px] transition-all duration-800 delay-400 ease-out
                 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                   Masters of Precision Payroll Processing
                </h2>
                
                <p className={`w-[342px] h-[72px] md:w-[620px] 2xl:w-[659px] md:h-[64px] text-[16px] md:text-[20px] 2xl:text-[24px]
                transition-all duration-700 delay-600 ease-out
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  We specialize in the art and science of meticulous payroll management
                  and scheduling of salary payments
                </p>
                
                <button className={`bg-[#63D9B9] w-[188px] h-[48px] md:h-[56px] rounded-[8px]
                 py-[1px] md:py-[14px] text-[16px] text-[#010101] transition-all duration-600 delay-800 ease-out
                 hover:scale-105 hover:shadow-lg hover:shadow-[#63D9B9]/25
                 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                   Get Started
                </button>
            </div>

            {/* Animated Content Section */}
            <div className='flex flex-col relative w-[382px] h-[508px] md:w-[754px] md:h-[844px] 
             gap-8 md:gap-8 mx-auto md:mx-0 md:ml-[3rem] 2xl:ml-[5rem] mt-5 md:mt-[-6rem] 2xl:mt-[-4.5rem] text-white'>
                
                {/* Animated Numbers Image */}
                <Image
                    ref={numbersRef}
                    src="/Images/Frame 205.svg"
                    alt="Number Image"
                    width={327}
                    height={68}
                    className={`w-[287px] h-[68px] md:w-[327px] md:h-[68px] transition-all duration-800 ease-out
                    ${numbersVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-2'}`}
                />

                {/* Animated Inner Content */}
                <div ref={contentRef} className={` md:h-[844px]  h-[508px] px-5 md:px-10 space-y-8 md:space-y-20 transition-all duration-1000 delay-200 ease-out
                ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                
                <h3 className='text-[20px] md:text-[45px]'>
                    Precision in Scheduling
                </h3>

                {/* Main Content Block */}
                <div className='flex flex-col space-y- md:space-y-6'>
                    <Image
                        src="/Images/Ellipse 49.svg"
                        alt="Ellipse Image"
                        width={24}
                        height={24}
                        className="absolute left-[2px] w-[8px] h-[32px] md:w-[24px] md:h-[24px] md:mt-5"
                    />
                    
                 <h3 className={`text-[20px] md:text-[45px] transition-all duration-700 delay-400 ease-out
                 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
                   Seamless Salary Management 
                 </h3>
                 
                <p className={`w-[345px] h-[168px] md:w-[675px] md:h-[180px] text-[16px] md:text-[24px]
                transition-all duration-800 delay-600 ease-out
                ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}> 
                    Managing salaries is more than just numbers; it&apos;s about empowering businesses 
                    to navigate payroll complexities effortlessly. Payclick excels in providing a seamless
                     salary management experience, offering tools and features that simplify the entire 
                     process from start to finish
                </p>
                </div>

                {/* Animated List Items */}
                <div ref={listRef} className='space-y-10 md:space-y-25'>
                <h3 className={`w-[209] h-[32px] text-[20px] md:text-[45px]
                 md:w-[492px] md:h-[52px] transition-all duration-600 delay-200 ease-out
                 hover:text-[#63D9B9] hover:translate-x-2
                 ${listVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}> 
                   Automated Efficiency 
                </h3>
                
                <h3 className={`w-[219] h-[32px] text-[20px] md:text-[45px]
                 md:w-[492px] md:h-[52px] transition-all duration-600 delay-400 ease-out
                 hover:text-[#63D9B9] hover:translate-x-2
                 ${listVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}> 
                   Compliance Assurance 
                </h3>
                </div>
             </div>
            </div>
        </div>
    </section>
  )
}

export default Expertise