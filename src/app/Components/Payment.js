import React from 'react'
import Image from 'next/image'

const Payment = () => {
  return (
    <section id='payment' className='bg-coffer-dark relative overflow-hidden'>
        {/* Custom background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
          style={{
            backgroundImage: "url('/Images/Group (3).svg')"
          }}
        />
        {/* flex container */}
        <div className='flex flex-col md:flex-row mx-auto gap-8 text-center md:text-start w-[430px] h-[824px] md:w-[1350px] md:h-[990px]
        relative z-10'>
            {/* item 1 */}
            <div className='flex flex-col mx-auto md:mx-0 w-[352px] h-[380px] md:w-[600px] md:h-[550px] 
            gap-[64px] md:gap-[30px] md:ml-[5rem] mt-10 md:mt-[18rem] text-white'>
                <h3 className='text-[20px] md:text-[35px]'>Why Choose Paycheck</h3>
                <div className='flex flex-col gap-[24px] md:gap-0'>
                <h2 className='text-[40px] md:text-[58px]'>Mastery in Salary Scheduling</h2>
                <p className='w-[320px] h-[144px] text-start md:w-[500px] md:h-[179px] text-[16px] md:text-[20px]'>
                    Our team, comprised of financial experts and tech innovators, excels in the art of salary scheduling. 
                    We&#39;ve honed our expertise to provide a platform that empowers businesses to effortlessly plan and execute timely salary payments.
                </p>
                </div>

            </div>
            {/* outer div */}
            <div className='flex flex-row space-x-6 '>
            {/* item 2 */}
            <div className='flex flex-row md:flex-col w-[240px] h-[320px] md:w-[260px] md:h-[670px] gap-7 
             md:mt-[7rem] mt-0'>
                {/* image 1 */}
                <Image
                    src="/Images/Frame 181.svg"
                    alt="Paycard Image 1"
                    width={260}
                    height={386}
                    className="w-[240px] h-[320px] md:w-[260px] md:h-[320px] rounded-[16px] ml-7 md:ml-0"
                />
                {/* image 2 */}
                <Image
                    src="/Images/Frame 183.svg"
                    alt="Paycard Image 2"
                    width={260}
                    height={386}
                    className="w-[240px] h-[320px] md:w-[260px] md:h-[320px] rounded-[16px]"
                />
            </div>
              {/* item 3 */}
            <div className='hidden md:flex flex-col w-[352px] h-[360px] md:w-[260px] md:h-[670px] gap-7 md:mt-[13rem] mt-15 '>
                {/* image 1 */}
                <Image
                    src="/Images/Frame 182.svg"
                    alt="Paycard Image 1"
                    width={260}
                    height={386}
                    className="w-[352px] h-[360px] md:w-[260px] md:h-[320px] rounded-[16px]"
                />
                {/* image 2 */}
                <Image
                    src="/Images/Frame 184.svg"
                    alt="Paycard Image 2"
                    width={260}
                    height={386}
                    className="w-[352px] h-[360px] md:w-[260px] md:h-[320px] rounded-[16px]"
                />
            </div>
          </div>
        </div>

    </section>
  )
}

export default Payment