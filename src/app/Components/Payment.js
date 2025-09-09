import React from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Payment = () => {
  const [textRef, textVisible] = useScrollAnimation()
  const [imagesRef, imagesVisible] = useScrollAnimation({ rootMargin: '-50px 0px' })

  return (
    <section id='payment' className='bg-coffer-dark relative overflow-hidden'>
      {/* flex container */}
        <div className='flex flex-col md:flex-row mx-auto gap-8 text-center md:text-start
         w-[430px] h-[784px] md:w-[1728px] md:h-[900px]
        relative z-10'>
        
        {/* Background overlay remains the same */}
        {/* <div className="absolute z-0 opacity-100 w-[140%] h-[70%] left-[6rem]
        md:w-[80%] md:h-[100%] md:left-[5.5rem] 2xl:left-[8rem]" 
          style={{
          backgroundImage: "url('/Images/Group (3).svg')",
          backgroundSize: 'contain',     
          backgroundRepeat: 'no-repeat',   
          backgroundPosition: 'center',                                                  
        }}
      /> */}
      {/* Custom background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0 md:left-[5.5rem] 2xl:left-[8rem]"
          style={{
            backgroundImage: "url('/Images/Group (3).svg')"
          }}
        />

            {/* Animated Text Section */}
            <div ref={textRef} className={`flex flex-col mx-auto md:mx-0 w-[352px] h-[380px] md:w-[600px] md:h-[550px] 
            gap-[54px] md:gap-[30px] md:ml-[5.5rem] mt-7 md:mt-[15rem] text-white z-50
            transition-all duration-1000 ease-out
            ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <h3 className='text-[20px] md:text-[35px]'>Why Choose Paycheck</h3>
                <div className='flex flex-col gap-[24px] md:gap-5'>
                <h2 className='text-[40px] md:text-[58px]'>Mastery in Salary Scheduling</h2>
                <p className='w-[330px] h-[144px] text-start md:w-[500px] md:h-[179px] text-[16px] md:text-[20px]'>
                    Our team, comprised of financial experts and tech innovators, excels in the art of salary scheduling. 
                    We&apos;ve honed our expertise to provide a platform that empowers businesses to effortlessly plan and execute timely salary payments.
                </p>
                </div>
            </div>

            {/* Animated Images Section */}
            <div ref={imagesRef} className={`flex flex-row space-x-6 mx-9 overflow-x-auto md:overflow-x-hidden overflow-y-hidden scrollbar-none z-50
            transition-all duration-1200 delay-200 ease-out
            ${imagesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* Column 1 */}
            <div className='flex flex-row md:flex-col w-full h-full md:w-[260px] md:h-[670px] gap-4 
             md:mt-[4rem] mt-0'>
                <Image
                    src="/Images/Frame 181.svg"
                    alt="Paycard Image 1"
                    width={260}
                    height={386}
                    className="w-[240px] h-[320px] md:w-[260px] md:h-[320px] rounded-[16px] hover:scale-105 transition-transform duration-300"
                />
                <Image
                    src="/Images/Frame 183.svg"
                    alt="Paycard Image 2"
                    width={260}
                    height={386}
                    className="w-[240px] h-[320px]  md:w-[260px] md:h-[320px] rounded-[16px] hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Column 2 */}
            <div className='hidden md:flex flex-col w-[352px] h-[360px] md:w-[260px] md:h-[670px] gap-7 md:mt-[11rem] mt-15 '>
                <Image
                    src="/Images/Frame 182.svg"
                    alt="Paycard Image 1"
                    width={260}
                    height={386}
                    className="w-[352px] h-[360px] md:w-[260px] md:h-[320px] rounded-[16px] hover:scale-105 transition-transform duration-300"
                />
                <Image
                    src="/Images/Frame 184.svg"
                    alt="Paycard Image 2"
                    width={260}
                    height={386}
                    className="w-[352px] h-[360px] md:w-[260px] md:h-[320px] rounded-[16px] hover:scale-105 transition-transform duration-300"
                />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Payment