import React from 'react'
import Image from 'next/image'

const Expertise = () => {
  return (
    <section id='expertise' className='bg-coffer-dark relative overflow-hidden'>
        {/* Custom background image overlay */}
        <div
            className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-50 z-0"
            style={{
                backgroundImage: "url('/Images/Group (4).svg')"
            }}
        />  
        {/* flex container */}
        <div className='flex flex-col mx-auto w-[430px] h-[824px] md:w-[1350px] md:h-[1456px] 
        relative z-10'>
            {/* item 1 */}
            <div className='flex flex-col w-[352px] h-[360px] md:w-[631px] md:h-[504px] gap-10 md:ml-[40rem]
            mt-10 md:mt-15 text-white'>
                <h3 className='md:text-[30px]'>Our Expertise</h3>
                <h2 className='text-[58px] w-[540px] h-[160px]'>Masters of Precision Payroll Processing</h2>
                <p className='w-[505px] h-[64px] text-[20px]'>We specialize in the art and science of meticulous payroll management
                     and scheduling of salary payments</p>
                     <button className='bg-[#63D9B9] w-[188px] h-[56px] rounded-[8px] py-[14px] text-[16px] text-[#010101]'>
                        Get Started
                        </button>
            </div>
            {/* item 2 */}
            <div className='flex flex-col relative w-[352px] h-[360px] md:w-[754px] md:h-[844px] gap-20 ml-[5rem]
            mt-10 md:mt-[-7rem] text-white text-[35px]'>
                <Image
                    src="/Images/Frame 205.svg"
                    alt="Number Image"
                    width={327}
                    height={68}
                    className="w-[352px] h-[360px] md:w-[327px] md:h-[68px]"
                />
                <div className='px-10 space-y-20'>
                <h3>
                    Precision in Scheduling
                </h3>
            
            {/* outer div */}
                <div className='flex flex-col space-y-6'>
                    <Image
                        src="/Images/Ellipse 49.svg"
                        alt="Ellipse Image"
                        width={24}
                        height={24}
                        className="absolute left-[2px] w-[24px] h-[24px] md:w-[24px] md:h-[24px] mt-3.5"
                    />
                <h3>
                    Seamless Salary Management
                    </h3>
                <p className='w-[659px] h-[160px] text-[24px]'> 
                    Managing salaries is more than just numbers; it&#39;s about empowering businesses to navigate payroll complexities effortlessly.
                     Payclick excels in providing a seamless salary management experience, offering tools and features that simplify 
                     the entire process from start to finish
                </p>
                </div>

                <h3>Automated Efficiency</h3>
                <h3>Compliance Assurance</h3>

             </div>
            </div>
        </div>
        </section>
  )
}

export default Expertise