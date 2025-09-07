import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section id='aboutus' className='relative bg-coffer-dark overflow-hidden'>
        {/* flex container  */}
        <div className='flex flex-col md:flex-row mx-auto gap-6 w-[430px] h-[640px] md:w-[1728px] md:h-[620px]
        text-white relative overflow-hidden z-10'>
            
            {/* Custom background image overlay */} 
            <div className="absolute z-0 opacity-50 md:left-[10%] 2xl:left-[30%]"
              style={{
                backgroundImage: "url('/Images/Group (5).svg')",
                backgroundSize: 'contain',    
                backgroundRepeat: 'no-repeat',   
                backgroundPosition: 'center',    
                width: '100%',                   
                height: '100%',                   
                top: '-2%'                               
              }}
            />
            
            {/* div 1 */}
            <div className='flex flex-col mx-auto md:mx-15 2xl:mx-55 w-[385px] h-[552px] md:w-[500px] md:h-[496px] mt-12 md:mt-[4rem] gap-8 md:gap-9'>
                <h3 className='text-[25px]'>About Us</h3>
                <h2 className='text-[48px] md:text-[50px] leading-tight mt-10 md:mt-0'>Pioneering Precision in Salary Management</h2>
                <p className='text-[16px] md:text-[17px] w-[382px] h-[168px] md:w-[425px] md:h-[152px]'>
                        Welcome to Payclick, where we redefine the landscape of financial efficiency with a focus
                        on seamless salary management and scheduling. At the heart of our mission is a dedication 
                        to simplifying the complexities associated with paying employees, ensuring that businesses 
                        can focus on what they do best
                </p>
            </div>
            
            {/* image */}
            <Image
              src="/Images/Frame 210.svg"
              alt="About Us Image"
              width={350}
              height={220}
              className="hidden md:flex w-[350px] h-[220px] rounded-[8px] mt-[5rem] z-50"
            />
        </div>
    </section> 
  )
}

export default AboutUs