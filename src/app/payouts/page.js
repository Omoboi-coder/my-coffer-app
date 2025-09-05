import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import Image from 'next/image'

const Payouts = () => {
  return (
        <DashboardLayout>
             <section className='flex flex-col md:flex-wrap 2xl:mx-auto relative 
             pb-25 md:pb-0 w-full h-full md:h-[1000px]'>
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
                    <p className='text-[45px] text-white'>Payouts</p>
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
                  {/* con 1 desktop */}
                  <div className='hidden md:flex flex-row md:w-[990px] md:h-[80px] md:gap-[36px] mt-12'>
                    {/* item 1 */}
                    <div className='md:w-[321px] md:h-[80px] rounded-[8px] md:py-[24px] md:px-[48px] bg-[#EF6315]'>
                        <span className='text-[16px]'>Total Payouts</span>
                        <span className='text-[24px] md:ml-6'>$62,478</span>
                    </div>
                    {/* item 2 */}
                    <div className='flex flex-row md:w-[309px] md:h-[80px] rounded-[8px] md:py-[24px] md:px-[48px]  bg-[#7BB5FC]'>
                      <div className='flex flex-row md:w-[111px] md:h-[24px] md:gap-[8px] md:mt-2 '>
                        <span className='text-[16px]'>November</span>
                         <Image
                         src="/Images/arrow-down 2.svg"
                         alt=''
                         width={24}
                         height={24}
                         />
                         </div>
                        <span className='text-[24px] ml-6'>$7,300</span>
                    </div>
                    {/* item 3 */}
                    <div className='flex flex-row md:w-[288px] md:h-[80px] rounded-[8px] md:py-[24px] md:px-[48px] bg-white'>
                       <div className='flex flex-row md:w-[72px] md:h-[24px] md:gap-[8px] md:mt-2 '>
                        <span className='text-[16px]'>2023</span>
                         <Image
                         src="/Images/arrow-down 2.svg"
                         alt=''
                         width={24}
                         height={24}
                         />
                         </div>
                        <span className='text-[24px] md:ml-6'>$35,800</span>
                    </div>
                  </div>
                  {/* con 1 mobile */}
                    <div className='flex md:hidden flex-col w-[382px] h-[108px] gap-3 mx-auto mt-8'>
                    {/* item 1 */}
                    <div className='flex flex-row w-[382px] h-[48px] rounded-[8px] justify-between py-[8px] px-[24px] bg-[#EF6315]'>
                        <span className='text-[16px] pt-2'>Total Payouts</span>
                        <span className='text-[24px] '>$62,478</span>
                    </div> 
                     {/*outer div  */}
                     <div className='flex flex-row w-[382px] h-[48px] gap-3'>
                        {/* item 2 */}
                    <div className='flex flex-row w-[185px] h-[48px] rounded-[8px] justify-between py-[8px] px-[12px] bg-[#7BB5FC]'>
                      <div className='flex flex-row w-[50px] h-[24px] gap-[4px] mt-1'>
                        <span className='text-[16px]'>Nov</span>
                         <Image
                         src="/Images/arrow-down 2.svg"
                         alt=''
                         width={16}
                         height={16}
                         />
                         </div>
                        <span className='text-[20px]'>$7,300</span>
                    </div>
                    {/* item 3 */}
                    <div className='flex flex-row w-[185px] h-[48px] rounded-[8px] justify-between py-[8px] px-[12px] bg-white'>
                      <div className='flex flex-row w-[60px] h-[24px] gap-[4px] mt-1'>
                        <span className='text-[16px]'>2023</span>
                         <Image
                         src="/Images/arrow-down 2.svg"
                         alt=''
                         width={16}
                         height={16}
                         />
                         </div>
                        <span className='text-[20px]'>$35,800</span>
                    </div>
                     </div>
                    </div>
                 {/* con 2 */}
                  <div className='flex flex-col md:flex-row md:flex-wrap w-[382px] h-[696px] md:w-[1077px] md:h-[338px] text-white/80 mx-auto md:mx-0 py-[10px] md:py-[10px] gap-[24px] mt-5 md:mt-12'>
                    {/* item 1 */}
                    <div className='flex flex-col bg-[#282828] w-[382px] h-[116px] md:w-[251px] md:h-[147px] rounded-[8px] py-[12px] px-[24px] md:px-[15px] gap-[36px] md:gap-[67px]'>
                        <span className='text-[24px]'>$ 125</span>
                        <div className='flex flex-row w-[223px] h-[24px] gap-[8px] text-[15px]'>
                            <span>11:26 am </span> 
                            <span>24th November 2023</span>
                        </div>
                    </div>
                     {/* item 2 */}
                    <div className='flex flex-col bg-[#282828] w-[382px] h-[116px] md:w-[251px] md:h-[147px] rounded-[8px] py-[12px] px-[24px] md:px-[15px] gap-[36px] md:gap-[67px]'>
                        <span className='text-[24px]'>$ 125</span>
                        <div className='flex flex-row w-[223px] h-[24px] gap-[8px] text-[15px]'>
                            <span>11:26 am </span> 
                            <span>24th November 2023</span>
                        </div>
                    </div>
                    {/* item 3 */}
                   <div className='flex flex-col bg-[#282828] w-[382px] h-[116px] md:w-[251px] md:h-[147px] rounded-[8px] py-[12px] px-[24px] md:px-[15px] gap-[36px] md:gap-[67px]'>
                        <span className='text-[24px]'>$ 125</span>
                        <div className='flex flex-row w-[223px] h-[24px] gap-[8px] text-[15px]'>
                            <span>11:26 am </span> 
                            <span>24th November 2023</span>
                        </div>
                    </div>
                    {/* item 4 */}
                    <div className='flex flex-col bg-[#282828] w-[382px] h-[116px] md:w-[251px] md:h-[147px] rounded-[8px] py-[12px] px-[24px] md:px-[15px] gap-[36px] md:gap-[67px]'>
                        <span className='text-[24px]'>$ 125</span>
                        <div className='flex flex-row w-[223px] h-[24px] gap-[8px] text-[15px]'>
                            <span>11:26 am </span> 
                            <span>24th November 2023</span>
                        </div>
                    </div>
                    {/* item 5 */}
                   <div className='flex flex-col bg-[#282828] w-[382px] h-[116px] md:w-[251px] md:h-[147px] rounded-[8px] py-[12px] px-[24px] md:px-[15px] gap-[36px] md:gap-[67px]'>
                        <span className='text-[24px]'>$ 125</span>
                        <div className='flex flex-row w-[223px] h-[24px] gap-[8px] text-[15px]'>
                            <span>11:26 am </span> 
                            <span>24th November 2023</span>
                        </div>
                    </div>
                  </div>
            </section>
    </DashboardLayout>
  )
}

export default Payouts