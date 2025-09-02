import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  // Define positions for your images
  const imagePositions = [
    { id: 1, top: '150px', left: '268px' },
    { id: 2, top: '220px', left: '370px' },
    { id: 3, top: '220px', left: '695px' },
    { id: 4, top: '205px', left: '826px' },
    { id: 5, top: '247px', left: '904px' },
    { id: 6, top: '235px', left: '970px' },
    { id: 7, top: '130px', left: '1030px' },
    { id: 8, top: '370px', left: '703px' },
    { id: 9, top: '460px', left: '1010px' }
   
  ];

  return (
    <section id='contact' className='bg-coffer-dark relative overflow-hidden'>
       <div className="absolute z-0 opacity-50"
        style={{
          backgroundImage: "url('/Images/Box_Alternating 1.svg')",
          backgroundSize: 'contain',    
          backgroundRepeat: 'no-repeat',   
          backgroundPosition: 'center',    
          width: '100%',                   
          height: '100%',                   
          top: '-2%',                                
        }}
      />
      
      {/* Multiple positioned images */}
      {imagePositions.map((position) => (
        <Image
          key={position.id}
          src="/Images/Frame 213.svg"
          width="20"
          height="2"
          alt=''
          className='absolute z-5'
          style={{
            top: position.top,
            left: position.left
          
          }}
        />
      ))}
      <Image
          src="/Images/Frame 225 (1).svg"
          width="229"
          height="104"
          alt=''
          className='absolute w-[229px] h-[104px] top-[100px] left-[723px] z-5'
          />

      {/* flex container */}
      <div className='flex flex-col md:flex-row mx-auto w-[430px] h-[680px] md:w-[1728px] md:h-[652px]
      text-white relative z-10'>
        {/* item 1 desktop*/}
        <div className='hidden md:flex flex-col w-[352px] h-[380px] md:w-[550px] md:h-[384px] md:gap-7 
        mt-2 md:mt-[15rem] md:ml-[6rem]'>
          <h3 className='md:text-[30px]'>Contact</h3>
          <div className='flex flex-col gap-4'>
              <h2 className='text-[58px] w-[540px] h-[80px]'>Get in touch with us</h2>
              <p className='w-[505px] h-[64px] text-[20px]'>Have questions or need assistance?
                 Reach out to our dedicated support team</p>
                 </div>
                <button className='bg-[#63D9B9] w-[184px] h-[52px] rounded-[8px] py-[14px] text-[16px] text-[#010101]'>
                Contact Us
                </button>
        </div>
        {/* item1 mobile */}
        <div className='flex md:hidden flex-col w-[347px] h-[160px] gap-4 mt-10 ml-7'>
          <h3 className='text-[24px]'>Contact</h3>
          <p className='w-[347px] h-[48px] text-[24px]'>Have questions or need assistance?
                 Reach out to our dedicated support team</p>
            </div>
          <div className='flex md:hidden flex-col w-[347px] h-[212px] gap-12 mt-[13rem] ml-7'>
              <h2 className='text-[48px] w-[347px] h-[112px] leading-15'>Get in touch with us</h2>
                <button className='bg-[#63D9B9] w-[184px] h-[52px] rounded-[8px] py-[14px] text-[16px] text-[#010101]'>
                Contact Us
              </button>
            </div>
      </div>
    </section>
  )
}

export default ContactUs