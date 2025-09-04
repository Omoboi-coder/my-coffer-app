import React from 'react'
import Image from 'next/image'
import DashboardLayout from '../Components/DashboardLayout'

const Members = () => {
  return (
    <DashboardLayout>
        <section className='flex flex-col md:flex-wrap 2xl:mx-auto relative w-full h-full md:h-[1000px]'>
        <div className='hidden md:flex flex-col md:w-[185px] md:h-[112px] gap-[24px] mt-8'>
            <div className='flex flex-row h-[36px] gap-1'>
            <Image
            src="Images/FourthCanvas - jpeg 0.svg"
            alt='Canvas Logo'
            width={36}
            height={36}
            />
            <Image
            src="Images/FourthCanvas - png 0.svg"
            alt='FourthCanvas'
            width={145}
            height={36}
            />
            </div>
            <p className='text-[45px] text-white'>Members</p>
        </div>

         {/* search div */}
          <div className='flex flex-row md:absolute md:right-15 md:top-15 max-w-[382px] md:w-[285px] h-[40px] 
            md:h-[50px] rounded-[12px] text-[12px] text-[#B6B6B6] md:p-4 p-2.5 mx-5 md:mx-0 gap-2
            border border-[#353535]'>
          <div className='flex flex-row w-[63px] h-[18px] gap-2 mb-1 md:mb-0'>
              <Image
              src="/Images/search-normal.svg"
              alt=''
              width={12}
              height={12}
              />
              <p>search</p> 
              </div>
          </div>
          {/* sort div */}
          <div className=' flex flex-row w-[104px] h-[40px] md:w-[93px] md:h-[52px] px-3 md:px-0 
          py-[8px] md:py-[14]px] rounded-[8px] md:mt-10 mt-5 ml-[18.5rem] md:ml-0 border border-[#D9D9D9] md:border-0'>
            <div className='flex flex-row gap-[8px]'>
            <span className='text-[14px] md:text-[16px] text-white opacity-80'>Sort by</span>
            <Image
              src="/Images/arrow-down.svg"
              alt=''
              width={24}
              height={24}
              />
            </div>
          </div>
          {/* button 1 */}
          <button className='w-[196px] md:w-[188px] h-[52px] rounded-[8px] gap-[10px] text-center
           absolute top-[40rem] text-[#63D9B9] border border-[#63D9B9] left-30 md:left-[39rem] md:absolute
           md:top-46 py-[14px] px-[28px] md:px-[28px]'>
            <span>View Attendance</span>
          </button>
          {/* button 2 */}
          <button className='w-[196px] md:w-[195px] h-[52px] rounded-[8px] gap-[10px] text-center absolute top-[40rem]
           left-30 md:left-[52rem] md:absolute md:top-46 py-[14px] px-[28px] md:px-[48px] bg-[#63D9B9]'>
            <span>Add Member</span>
          </button>
          {/* mobile schedule div */}
          <div className='flex md:hidden flex-row w-[384px] h-[84px] text-white mx-4 
          mt-6 gap-[30px] relative opacity-90'>
            <div className='flex flex-row w-[206px] h-[84px] gap-[8px] text-[20px]'>
            <Image
              src="/Images/Checkbox.svg"
              alt=''
              width={20}
              height={20}
              className='absolute top-1'
              />
              <div className='flex flex-col w-[178px] h-[84px] gap-[2px] ml-7'>
              <p className='text-[20px]'>Ella Roberts</p>
              <p className='text-[16px]'>Ellaroberts34@gmail.com</p>
              <p className='text-[16px]'>UI Engineer</p>
             </div>
             </div>
             <div className='flex flex-col w-[97px] h-[56px] gap-[8px] text-[16px]'>
                <span>HS9NNS...HJ</span>
                <span>$876</span>
             </div>
             <Image
              src="/Images/more.svg"
              alt=''
              width={24}
              height={24}
              className='absolute left-[22.5rem] top-0'
              />
          </div>
          {/* desktop schedule div */}
          <div className='hidden md:flex flex-col md:w-[177px] md:h-[136px] md:gap-[72px] text-white
           md:mt-10.5 opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:w-[109px] md:h-[32px] md:gap-[24px] text-[24px]'>
            <Image
              src="/Images/Checkbox.svg"
              alt=''
              width={20}
              height={20}
              />
              <p>Name</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[177px] md:h-[32px] md:gap-[24px] text-[24px]'>
            <Image
              src="/Images/Checkbox.svg"
              alt=''
              width={20}
              height={20}
              />
              <p>Ella Roberts</p>
             </div>
          </div>

            {/* schedule div 2 */}
          <div className='hidden md:flex flex-col md:w-[185px] md:h-[136px] md:gap-[72px] text-white 
          absolute top-[17.5rem] left-[15rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:gap-[24px] text-[24px]'>
              <p>Email Address</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[185px] md:h-[24px] text-[16px]'>
              <p>Ellaroberts34@gmail.com</p>
             </div>
          </div>
           {/* schedule div 3 */}
          <div className='hidden md:flex flex-col md:w-[160px] md:h-[136px] md:gap-[79px] text-white 
          absolute top-[17.5rem] left-[31rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:w-[160px] md:h-[32px] text-[24px]'>
              <p>Wallet Address</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[140px] md:h-[24px] text-[16px]'>
              <p>HS9NNS77383GHJ</p>
             </div>
          </div>
           {/* schedule div 4 */}
          <div className='hidden md:flex flex-col md:w-[86px] md:h-[128px] md:gap-[72px] text-white 
          absolute top-[17.5rem] left-[45rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row text-[24px]'>
              <p>Position</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[86px] md:h-[24px] text-[16px]'>
              <p>UI Engineer</p>
             </div>
          </div>
          {/* schedule div 5 */}
          <div className='hidden md:flex flex-col md:w-[125px] md:h-[128px] md:gap-[72px] text-white 
          absolute top-[17.5rem] left-[56rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:gap-[24px] text-[24px]'>
              <p>Salary</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[125px] md:h-[24px] md:gap-[62px] text-[16px]'>
              <p>$876</p>
               <Image
              src="/Images/more.svg"
              alt=''
              width={24}
              height={24}
              className=''
              />
             </div>
          </div>
        </section>
    </DashboardLayout>
  )
}

export default Members