import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <section id='features' className='bg-coffer-dark relative overflow-hidden'>
       {/* Custom background image overlay */} 
         <div 
          className="absolute top-[10px] md:left-[1023px] 2xl:left-[51rem] w-72 h-48
           md:w-[278px] md:h-[269px] 2xl:w-[1400px] z-0 opacity-100 bg-contain bg-no-repeat bg-center "
          style={{
            backgroundImage: "url('/Images/LooperGroup.svg')"
          }}
        />
         {/* Custom background image overlay */} 
         <div 
          className="absolute top-[450px] md:left-[35px] 2xl:left-[51rem] w-72 h-48
           md:w-[245px] md:h-[262px] 2xl:w-[1400px] z-0 opacity-70 bg-contain bg-no-repeat bg-center "
          style={{
            backgroundImage: "url('/Images/Group 9.svg')"
          }}
        />
        {/* flex container */}
        <div className='flex flex-col w-[430px] h-[1040px] md:w-[1728px] md:h-[615px] mx-auto
        relative text-white z-10'>
            {/* Heading */}
            <h3 className='text-[20px] md:text-[45px] h-[52px] mt-10 md:mt-10 ml-5'>How Payclick Works</h3>
            
            {/* outer div*/}
            <div className='flex flex-col md:flex-row w-[382px] h-[848px] md:w-[1305px] md:h-[360px] mx-auto md:mx-5 gap-4 md:gap-3
            mt-8 md:mt-25'>
            {/* box 1  */}
            <div className='flex flex-col w-[382px] h-[200px] md:w-[320px] md:h-[360px] border justify-between
             text-white
             bg-feature-gradient'>
           <Image
              src="/Images/quill_sign.svg"
              alt="Quill Sign Image"
              width={64}
              height={64}
              className="w-[24px] h-[24px] md:w-[64px] md:h-[64px] mt-4 ml-3"
            />
            <div className='flex flex-col w-[350px] h-[96px] md:w-[300px] md:h-[141px] mx-auto gap-4 md:gap-9 mb-0 md:mb-6'>
            <p className='text-[20px] md:text-[24px]'> <span className='border-b-2 border-white'>Sign</span> up for free</p>
             <p className='text-[14px] md:text-[16px]'>Getting started is a breeze. Sign up on Payclick and enjoy a free trial 
            to explore all the features</p>
             </div>
                </div>

                {/* box 2  */}
            <div className='flex flex-col w-[382px] h-[200px] md:w-[320px] md:h-[360px] border justify-between
             text-white
             bg-feature-gradient'>
           <Image
              src="/Images/layer-group-solid.svg"
              alt="Quill Sign Image"
              width={56}
              height={56}
              className="w-[24px] h-[24px] md:w-[56px] md:h-[56px] mt-4 ml-3 "
            />
            <div className='flex flex-col w-[350px] h-[120px] md:w-[300px] md:h-[141px] mx-auto gap-4 md:gap-9 mb-0 md:mb-6'>
            <p className='text-[20px] md:text-[24px]'> <span className='border-b-2 border-white'>Integrate</span> payroll system</p>
             <p className='text-[14px] md:text-[16px]'>Seamlessly integrate our platform with your existing payroll system. 
                Our user-friendly interface give a smooth transition</p>
             </div>
                </div>

                {/* box 3  */}
            <div className='flex flex-col w-[382px] h-[200px] md:w-[320px] md:h-[360px] border justify-between
             text-white
             bg-feature-gradient'>
           <Image
              src="/Images/game-icons_processor.svg"
              alt="Quill Sign Image"
              width={64}
              height={64}
              className="w-[24px] h-[24px] md:w-[64px] md:h-[64px] mt-4 ml-3 "
                />
            <div className='flex flex-col w-[350px] h-[120px] md:w-[310px] md:h-[141px] mx-auto gap-4 md:gap-9 mb-0 md:mb-6'>
            <p className='text-[20px] md:text-[24px]'> <span className='border-b-2 border-white'>Process</span> payroll with ease</p>
             <p className='text-[14px] md:text-[16px]'>With a few clicks, you can process salaries for all your employees. 
                Our system is designed to be efficient and user-friendly.</p>
             </div>
                </div>

                {/* box 4  */}
            <div className='flex flex-col w-[382px] h-[200px] md:w-[320px] md:h-[360px] border justify-between
             text-white
             bg-feature-gradient'>
           <Image
              src="/Images/bezier-curve-solid.svg"
              alt="Quill Sign Image"
              width={64}
              height={51}
              className="w-[24px] h-[19.2px] md:w-[64px] md:h-[51px] mt-4 ml-3 "
                />
            <div className='flex flex-col w-[350px] h-[120px] md:w-[300px] md:h-[141px] mx-auto gap-4 md:gap-9 mb-0 md:mb-6'>
            <p className='text-[20px] md:text-[24px]'> <span className='border-b-2 border-white'>Receive</span> real-time updates</p>
             <p className='text-[14px] md:text-[16px]'>Stay in the loop with timely notifications on salary processing, 
                ensuring you&#39;re always aware of payment status</p>
             </div>
                </div>







            </div>
        </div>

    </section>
  )
}

export default Features