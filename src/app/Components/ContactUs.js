import React from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ContactUs = () => {
  const [desktopRef, desktopVisible] = useScrollAnimation()
  const [mobileRef, mobileVisible] = useScrollAnimation()
  const [decorativeRef, decorativeVisible] = useScrollAnimation({ rootMargin: '-50px 0px' })

  // Define positions for images with animation delays
  const imagePositions = [
    { id: 1, top: '150px', left: '268px', delay: 100 },
    { id: 2, top: '220px', left: '370px', delay: 200 },
    { id: 3, top: '220px', left: '695px', delay: 300 },
    { id: 4, top: '205px', left: '826px', delay: 400 },
    { id: 5, top: '247px', left: '904px', delay: 500 },
    { id: 6, top: '235px', left: '970px', delay: 600 },
    { id: 7, top: '130px', left: '1030px', delay: 700 },
    { id: 8, top: '370px', left: '703px', delay: 800 },
    { id: 9, top: '460px', left: '1010px', delay: 900 }
  ];

  return (
    <section id='contact' className='bg-coffer-dark overflow-hidden'>
      {/* flex container */}
      <div className='flex flex-col md:flex-row mx-auto w-[430px] h-[680px] md:w-[1728px] md:h-[624px]
      2xl:h-[840px] text-white relative z-10'>
        
        {/* Background image remains the same */}
        <div className="hidden md:flex absolute z-0 opacity-50 md:right-[24%] 2xl:right-0
        md:w-[75%] 2xl:w-[97%] h-[120%]"
          style={{
            backgroundImage: "url('/Images/Box_Alternating 1.svg')",
            backgroundSize: 'cover',    
            backgroundRepeat: 'no-repeat',   
            backgroundPosition: 'center',                                        
            top: '-6%'                           
          }}
        />

         {/* Background image remains the same */}
        <div className="md:hidden absolute z-0 opacity-100 left-[24px] pointer-events-none"
          style={{
            backgroundImage: "url('/Images/Group 13 1 (2).svg')",
            backgroundSize: 'contain',    
            backgroundRepeat: 'no-repeat',   
            backgroundPosition: 'center',    
            width: '382px',                   
            height: '462px',                   
            top: '30%'                               
          }}
        />

        {/* Animated Multiple positioned images */}
        <div ref={decorativeRef}>
          {imagePositions.map((position) => (
            <Image
              key={position.id}
              src="/Images/Frame 213.svg"
              width="20"
              height="2"
              alt=''
              className={`absolute z-5 pointer-events-none hidden md:block transition-all duration-600 ease-out`}
              style={{
                top: position.top,
                left: position.left,
                opacity: decorativeVisible ? 1 : 0,
                transform: decorativeVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.8)',
                transitionDelay: `${position.delay}ms`
              }}
            />
          ))}
        </div>
        
        {/* Animated Large positioned image */}
        <Image
            src="/Images/Frame 225 (1).svg"
            width="229"
            height="104"
            alt=''
            className={`absolute w-[229px] h-[104px] top-[100px] left-[723px] z-0 pointer-events-none hidden md:block
            transition-all duration-1000 delay-500 ease-out
            ${decorativeVisible ? 'opacity-60 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-3'}`}
        />

        {/* Animated Desktop Version */}
        <div ref={desktopRef} className={`hidden md:flex flex-col w-[352px] h-[380px] md:w-[570px] 2xl:w-[731px] md:h-[384px] md:gap-[40px]
         2xl:gap-[50px] mt-2 md:mt-[15rem] 2xl:mt-[23rem] md:ml-[3.5rem] 2xl:ml-[5rem] z-10 transition-all duration-1000 ease-out
        ${desktopVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          
          <h3 className={`md:text-[30px] 2xl:text-[45px] w-fit transition-all duration-600 delay-200 ease-out
          ${desktopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Contact
          </h3>
          
          <div className='flex flex-col gap-6'>
              <h2 className={`text-[58px] 2xl:text-[72px] md:w-[570px] 2xl:w-[731px] h-[80px] transition-all duration-800 delay-400 ease-out
              ${desktopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Get in touch with us
              </h2>
              
              <p className={`md:w-[505px] 2xl:w-[659px] h-[64px] text-[20px] 2xl:text-[24px] transition-all duration-700 delay-600 ease-out
              ${desktopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Have questions or need assistance?
                Reach out to our dedicated support team
              </p>
          </div>
          
          <button className={`bg-[#63D9B9] w-[184px] h-[52px] rounded-[8px] py-[14px] text-[16px] text-[#010101]
          transition-all duration-600 delay-800 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#63D9B9]/25
          ${desktopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Contact Us
          </button>
        </div>
        
        {/* Animated Mobile Version */}
        <div ref={mobileRef} className={`flex md:hidden flex-col transition-all duration-1000 ease-out
        ${mobileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className='flex flex-col w-[347px] h-[160px] gap-4 mt-10 ml-7'>
            <h3 className={`text-[24px] transition-all duration-600 delay-200 ease-out
            ${mobileVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              Contact
            </h3>
            
            <p className={`w-[347px] h-[48px] text-[24px] transition-all duration-700 delay-400 ease-out
            ${mobileVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              Have questions or need assistance?
              Reach out to our dedicated support team
            </p>
          </div>
          
          <div className='flex flex-col w-[347px] h-[212px] gap-12 mt-[13rem] ml-7'>
              <h2 className={`text-[48px] w-[347px] h-[112px] leading-15 transition-all duration-800 delay-600 ease-out
              ${mobileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                Get in touch with us
              </h2>
              
              <button className={`bg-[#63D9B9] w-[184px] h-[52px] rounded-[8px] py-[14px] text-[16px] text-[#010101]
              transition-all duration-600 delay-800 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#63D9B9]/25
              ${mobileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Contact Us
              </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs