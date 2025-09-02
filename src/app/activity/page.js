import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import Image from 'next/image'

const activity = () => {
  return (
    <DashboardLayout>
        <section className='flex flex-row 2xl:mx-auto relative'>
            <div className='hidden flex-col md:w-[185px] md:h-[112px] gap-[24px] mt-8'>
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
                <p className='text-[45px] text-white ml-2'>Activity</p>
            </div>
             {/* search div */}
                <div className='flex flex-row md:absolute right-20 top-20 w-[364px] md:w-[285px] h-[40px] 
                md:h-[50px] rounded-[12px] text-[12px] text-[#B6B6B6] md:p-4 p-2.5   ml-9 md:ml-0 gap-2 border border-[#353535]'>
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
                {/* No activity container */}
                <div className='hidden flex-col absolute top-[15rem] md:left-[18rem] left-[5rem] w-[260px] h-[292px] md:w-[456px] md:h-[496px]'>
                    <Image
                    src="/Images/Mobile banking app with secure payment.svg"
                    alt=''
                    fit
                    width={456}
                    height={456}
                    />
                    <p className='text-[16px] md:text-[24px] text-white opacity-80 mx-auto'> You don’t have any Activities</p> 
                </div>
                    {/*  outer container */}
                      <div className='flex flex-col absolute top-40 md:w-[990px] md:h-[290px] gap-[12px] mt-5 ml-6 opacity-90'>
                        {/* item 1 */}
                        <div className='flex flex-row md:h-[48px] rounded-[8px] gap-30 bg-[#282828]'>
                          <div className=' flex flex-row md:w-[167px] md:h-[24px] my-3 ml-5 gap-2 text-[16px] text-white'>
                            <Image
                              src="/Images/money-add.svg"
                              alt=''
                              width={24}
                              height={24}
                              className=''
                              />
                              <p className='mt-0.5'>Account Funded</p>
                          </div>
                          <div className=' flex flex-row md:w-[233px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
                              <p>11:26 am</p>
                              <p>24th November 2023</p>
                          </div>
                          <div className=' flex flex-row md:w-[41px] md:h-[24px] my-3 ml-5 mt-3.5 text-[16px] text-white'>
                              <p>$ 125</p>
                          </div>
                            <div className=' flex flex-row md:w-[78px] md:h-[20px] my-3 ml-5 mt-4 text-[14px] text-white'>
                              <p>Successful</p>
                          </div>
                        </div>
                          {/* item 2 */}
                        <div className='flex flex-row md:h-[48px] rounded-[8px] gap-30 bg-[#282828]'>
                          <div className=' flex flex-row md:w-[167px] md:h-[24px] my-3 ml-5 gap-2 text-[16px] text-white'>
                            <Image
                              src="/Images/money-add.svg"
                              alt=''
                              width={24}
                              height={24}
                              className=''
                              />
                              <p className='mt-0.5'>Account Funded</p>
                          </div>
                          <div className=' flex flex-row md:w-[233px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
                              <p>11:26 am</p>
                              <p>24th November 2023</p>
                          </div>
                          <div className=' flex flex-row md:w-[41px] md:h-[24px] my-3 ml-5 mt-3.5 text-[16px] text-white'>
                              <p>$ 125</p>
                          </div>
                            <div className=' flex flex-row md:w-[78px] md:h-[20px] my-3 ml-5 mt-4 text-[14px] text-white'>
                              <p>Successful</p>
                          </div>
                        </div>
                          {/* item 3 */}
                        <div className='flex flex-row md:h-[48px] rounded-[8px] gap-30 bg-[#282828]'>
                          <div className=' flex flex-row md:w-[167px] md:h-[24px] my-3 ml-5 gap-2 text-[16px] text-white'>
                            <Image
                              src="/Images/money-add.svg"
                              alt=''
                              width={24}
                              height={24}
                              className=''
                              />
                              <p className='mt-0.5'>Account Funded</p>
                          </div>
                          <div className=' flex flex-row md:w-[233px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
                              <p>11:26 am</p>
                              <p>24th November 2023</p>
                          </div>
                          <div className=' flex flex-row md:w-[41px] md:h-[24px] my-3 ml-5 mt-3.5 text-[16px] text-white'>
                              <p>$ 125</p>
                          </div>
                            <div className=' flex flex-row md:w-[78px] md:h-[20px] my-3 ml-5 mt-4 text-[14px] text-white'>
                              <p>Successful</p>
                          </div>
                        </div>
                         {/* item 4 */}
                        <div className='flex flex-row md:h-[48px] rounded-[8px] gap-30 bg-[#282828]'>
                          <div className=' flex flex-row md:w-[167px] md:h-[24px] my-3 ml-5 gap-2 text-[16px] text-white'>
                            <Image
                              src="/Images/money-add.svg"
                              alt=''
                              width={24}
                              height={24}
                              className=''
                              />
                              <p className='mt-0.5'>Account Funded</p>
                          </div>
                          <div className=' flex flex-row md:w-[233px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
                              <p>11:26 am</p>
                              <p>24th November 2023</p>
                          </div>
                          <div className=' flex flex-row md:w-[41px] md:h-[24px] my-3 ml-5 mt-3.5 text-[16px] text-white'>
                              <p>$ 125</p>
                          </div>
                            <div className=' flex flex-row md:w-[78px] md:h-[20px] my-3 ml-5 mt-4 text-[14px] text-white'>
                              <p>Successful</p>
                          </div>
                        </div>
                         {/* item 5 */}
                        <div className='flex flex-row md:h-[48px] rounded-[8px] gap-30 bg-[#282828]'>
                          <div className=' flex flex-row md:w-[167px] md:h-[24px] my-3 ml-5 gap-2 text-[16px] text-white'>
                            <Image
                              src="/Images/money-add.svg"
                              alt=''
                              width={24}
                              height={24}
                              className=''
                              />
                              <p className='mt-0.5'>Account Funded</p>
                          </div>
                          <div className=' flex flex-row md:w-[233px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
                              <p>11:26 am</p>
                              <p>24th November 2023</p>
                          </div>
                          <div className=' flex flex-row md:w-[41px] md:h-[24px] my-3 ml-5 mt-3.5 text-[16px] text-white'>
                              <p>$ 125</p>
                          </div>
                            <div className=' flex flex-row md:w-[78px] md:h-[20px] my-3 ml-5 mt-4 text-[14px] text-white'>
                              <p>Successful</p>
                          </div>
                        </div>
                      </div>


        </section>
    </DashboardLayout>
  )
}

export default activity