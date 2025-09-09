import React from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AboutUs = () => {
  const [textRef, textVisible] = useScrollAnimation()
  const [imageRef, imageVisible] = useScrollAnimation({ rootMargin: '-100px 0px' })

  return (
    <section id='aboutus' className='relative bg-coffer-dark overflow-hidden'>
        {/* flex container  */}
        <div className='flex flex-col md:flex-row mx-auto gap-6 w-[430px] h-[640px] md:w-[1728px] md:h-[620px]
        text-white relative overflow-hidden z-10'>
            
            {/* Background overlay remains the same */} 
            <div className="absolute z-0 opacity-50 top-[-25%] md:top-[-2%] w-[175%] h-[150%] md:w-[100%]
             md:h-[100%] left-[-13%] md:left-[10%] 2xl:left-[30%]"
              style={{
                backgroundImage: "url('/Images/Group (5).svg')",
                backgroundSize: 'contain',    
                backgroundRepeat: 'no-repeat',   
                backgroundPosition: 'center',                                                    
              }}
            />
            
            {/* Animated Text Section */}
            <div ref={textRef} className={`flex flex-col mx-auto md:mx-15 2xl:mx-55 w-[385px] h-[552px] md:w-[500px] md:h-[496px] mt-12 md:mt-[4rem] gap-8 md:gap-9
            transition-all duration-1000 ease-out
            ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                
                <h3 className={`text-[25px] transition-all duration-600 delay-200 ease-out
                ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  About Us
                </h3>
                
                <h2 className={`text-[48px] md:text-[50px] leading-tight mt-10 md:mt-0 transition-all duration-800 delay-400 ease-out
                ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Pioneering Precision in Salary Management
                </h2>
                
                <p className={`text-[16px] md:text-[17px] w-[382px] h-[168px] md:w-[425px] md:h-[152px]
                transition-all duration-700 delay-600 ease-out
                ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    Welcome to Payclick, where we redefine the landscape of financial efficiency with a focus
                    on seamless salary management and scheduling. At the heart of our mission is a dedication 
                    to simplify the complexities associated with paying employees, ensuring that businesses 
                    can focus on what they do best
                </p>
            </div>
            
            {/* Animated Image */}
            <Image
              ref={imageRef}
              src="/Images/Frame 210.svg"
              alt="About Us Image"
              width={350}
              height={220}
              className={`hidden md:flex w-[350px] h-[220px] rounded-[8px] mt-[5rem] z-50
              transition-all duration-1000 delay-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-white/10
              ${imageVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-2'}`}
            />
        </div>
    </section> 
  )
}

export default AboutUs