import React from 'react'
import Image from 'next/image'

const Expertise = () => {
  return (
    <section id='expertise' className='bg-coffer-dark overflow-hidden'>
         {/* flex container */}
        <div className='flex flex-col mx-auto w-[430px] h-[990px] md:w-[1728px] md:h-[1206px] 
        relative z-10'>
        {/* Custom background image overlay */}
        {/* <div
            className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-50 z-0"
            style={{
                backgroundImage: "url('/Images/Group (4).svg')"
            }}
        />   */}
         <div className="absolute z-0 opacity-100 right-30"
          style={{
          backgroundImage: "url('/Images/Group (4).svg')",
          backgroundSize: 'contain',    
          backgroundRepeat: 'no-repeat',   
          backgroundPosition: 'center',    
          width: '100%',                   
          height: '100%'                                                  
        }}
      /> 
            {/* item 1 */}
            <div className='flex flex-col w-[382px] h-[410px] md:w-[631px] md:h-[504px] gap-7 md:gap-5 
            mx-auto md:mx-0 md:ml-[40rem] mt-10 md:mt-8 text-white z-50'>
                <h3 className='text-[20px] md:text-[30px]'>Our Expertise</h3>
                <h2 className='text-[40px] leading-12 md:leading-16 mt-5 md:text-[58px] w-[362px] h-[144px]
                 md:w-[540px] md:h-[160px]'>Masters of Precision Payroll Processing</h2>
                <p className='w-[342px] h-[72px] md:w-[505px] md:h-[64px] text-[16px] md:text-[20px]'
                >We specialize in the art and science of meticulous payroll management
                     and scheduling of salary payments</p>
                     <button className='bg-[#63D9B9] w-[188px] h-[48px] md:h-[56px] rounded-[8px]
                      py-[1px] md:py-[14px] text-[16px] text-[#010101]'>
                        Get Started
                        </button>
            </div>
            {/* item 2 */}
            <div className='flex flex-col relative w-[382px] h-[508px] md:w-[754px] md:h-[844px] 
             gap-8 md:gap-8 mx-auto md:mx-0 md:ml-[5rem] mt-5 md:mt-[-6rem] text-white'>
                <Image
                    src="/Images/Frame 205.svg"
                    alt="Number Image"
                    width={327}
                    height={68}
                    className="w-[287px] h-[68px] md:w-[327px] md:h-[68px]"
                />
                {/* inner div */}
                <div className='px-5 md:px-10 space-y-8 md:space-y-20'>
                <h3 className='text-[20px] md:text-[45px]'>
                    Precision in Scheduling
                </h3>
            {/* outer div */}
                <div className='flex flex-col space-y- md:space-y-6'>
                    <Image
                        src="/Images/Ellipse 49.svg"
                        alt="Ellipse Image"
                        width={24}
                        height={24}
                        className="absolute left-[2px] w-[8px] h-[32px] md:w-[24px] md:h-[24px] md:mt-5"
                    />
                 <h3 className='text-[20px] md:text-[45px]'> Seamless Salary Management </h3>
                <p className='w-[325px] h-[168px] md:w-[659px] md:h-[160px] text-[16px] md:text-[24px]'> 
                    Managing salaries is more than just numbers; it&#39;s about empowering businesses 
                    to navigate payroll complexities effortlessly. Payclick excels in providing a seamless
                     salary management experience, offering tools and features that simplify the entire 
                     process from start to finish
                </p>
                </div>
                <h3 className='w-[209] h-[32px] text-[20px] md:text-[45px]
                 md:w-[470px] md:h-[52px]'> Automated Efficiency </h3>
                <h3 className='w-[219] h-[32px] text-[20px] md:text-[45px]
                 md:w-[492px] md:h-[52px]'> Compliance Assurance </h3>
             </div>
            </div>
        </div>
        </section>
  )
}

export default Expertise