import React from 'react'
import Image from 'next/image'

const Mobile = () => {
  return (
    <div className='flex flex-col md:hidden'>
              {/* div 1 */}
              <div className='flex flex-row w-[536px] h-[128px] gap-[8px] 
              mt-5 ml-6'>
                {/* image 1 */}
                <div className='flex w-[200px] h-[128px] relative rounded-[8px]
                bg-[#EF6315]'>
                  <div className='flex flex-col w-[134px] h-[96px] ml-3  
                  mt-4 text-white space-y-[40px]'>
                    <h2 className='text-[16px] '>Available Balance</h2>
                    <div className='flex flex-row w-[126px] h-[32px] '>
                      <p className='w-[120px] h-[40px] text-[24px] '>24,000</p>
                      <p className='text-[16px] mt-2'>USDT</p>
                    </div>
                  </div>
                  <Image
                      src="/Images/Ellipse 44.svg"
                      alt=''
                      width={30}
                      height={30}
                      className='absolute top-0 left-[170px]'
                      />
                       <Image
                      src="/Images/Ellipse 45.svg"
                      alt=''
                      width={21}
                      height={21}
                      className='absolute top-[85px] left-[180px]'
                      />
                </div>
                {/* image 2 */}
                <div className='flex flex-col w-[160px] h-[128px] rounded-[16px] bg-[#4A4A4A]'>
                  <div className='flex flex-col w-[118px] h-[86px] space-y-[16px] 
                  mx-auto text-center mt-6'>
                     <Image
                      src="/Images/money-send.svg"
                      alt=''
                      width={36}
                      height={36}
                      className='mx-auto w-[16px] h-[16px]'
                      />
                      <div className='flex flex-col w-[118px] h-[54px] mt-2 text-white space-y-2'>
                        <p className='text-[16px]'>Salary Payouts</p>
                        <div className='flex flex-row mx-auto gap-[7px]'>
                        <p className='text-[10px]'>For November</p>
                        <p className='text-[12px]'>$9800</p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* image 3 */}
                <div className='flex flex-col w-[160px] h-[128px] rounded-[16px] bg-white'>
                  <div className='flex flex-col w-[147px] h-[86px] ml-2 mt-6'>
                     <Image
                      src="/Images/calendar-2 (2).svg"
                      alt=''
                      width={16}
                      height={16}
                      className='mx-auto'
                      />
                      <div className='w-[146px] h-[90px] mt-2 text-center text-black space-y-2'>
                        <p className='text-[16px]'>Scheduled</p>
                        <p className='text-[10px] text-start'>Outgoing Payments</p>
                        <p className='text-[12px]'>$7490</p>
                      </div>
                  </div>
                </div>
              </div>
              {/* div 2 */}
              <div className='flex flex-row w-[215px] h-[24px] text-[#63D9B9] text-[16px] mt-5 ml-6'>
                <p>Member of the Month</p>
                 <Image
                      src="/Images/arrow-up.svg"
                      alt=''
                      width={24}
                      height={24}
                      className='w-[24px] h-[24px] ml-4 '
                      />
              </div>
              {/* div 3 */}
              <div className='flex flex-row w-[382px] h-[24px] justify-between mt-5 ml-6'>
                <h3 className='text-[16px] text-white'>Recent Activities</h3>
                <h5 className='text-[12px] text-[#63D9B9] opacity-70 mt-1'>View all</h5>
    
              </div>
              {/* div 4 */}
              <div className='flex flex-col w-[382px] h-[220px] gap-[10px] mt-5 ml-6'>
                {/* item 1 */}
                <div className='flex flex-row rounded-[8px] py-2 gap-17 bg-[#282828]'>
                  <div className='flex flex-col w-[167px] h-[52px] space-y-1'>
                    <p className='ml-3 text-white opacity-80'>11:26 am</p>
                    <div className=' flex flex-row  ml-3 gap-2 text-[16px] text-white'>
                    <Image
                      src="/Images/wallet-money.svg"
                      alt=''
                      width={24}
                      height={24}
                      className=''
                      />
                      <p className='mt-0.5'>Account Funded</p>
                  </div>  
                </div>       
              <div className='flex flex-row my-3 mt-3.5 text-[16px] text-white'>
               <p>$ 125</p>
                </div>
                <Image
                      src="/Images/verify.svg"
                      alt=''
                      width={24}
                      height={24}
                      className=''
                      />
                </div>
                  {/* item 2 */}
                <div className='flex flex-row rounded-[8px] py-2 gap-17 bg-[#282828]'>
                  <div className='flex flex-col w-[167px] h-[52px] space-y-1'>
                    <p className='ml-3 text-white opacity-80'>11:26 am</p>
                    <div className=' flex flex-row  ml-3 gap-2 text-[16px] text-white'>
                    <Image
                      src="/Images/wallet-money.svg"
                      alt=''
                      width={24}
                      height={24}
                      className=''
                      />
                      <p className='mt-0.5'>Account Funded</p>
                  </div>  
                </div>       
              <div className='flex flex-row my-3 mt-3.5 text-[16px] text-white'>
               <p>$ 125</p>
                </div>
                <Image
                      src="/Images/verify.svg"
                      alt=''
                      width={24}
                      height={24}
                      className=''
                      />
                </div>
                 {/* item 3 */}
                <div className='flex flex-row rounded-[8px] py-2 gap-17 bg-[#282828]'>
                  <div className='flex flex-col w-[167px] h-[52px] space-y-1'>
                    <p className='ml-3 text-white opacity-80'>11:26 am</p>
                    <div className=' flex flex-row  ml-3 gap-2 text-[16px] text-white'>
                    <Image
                      src="/Images/wallet-money.svg"
                      alt=''
                      width={24}
                      height={24}
                      className=''
                      />
                      <p className='mt-0.5'>Account Funded</p>
                  </div>  
                </div>       
              <div className='flex flex-row my-3 mt-3.5 text-[16px] text-white'>
               <p>$ 125</p>
                </div>
                <Image
                      src="/Images/verify.svg"
                      alt=''
                      width={24}
                      height={24}
                      className=''
                      />
                </div>
              </div>
                {/* div 5 */}
                        {/* item 1 */}
                    <div className='flex flex-row w-[482px] h-[56px] mt-8'>
                        <div className='flex w-[180px] h-[56px] rounded-[8px] py-[12px] ml-6 border 
                        text-white border-[#244E43] bg-[#0D0D0D] '>
                          <div className='flex flex-row w-[146px] h-[32px] gap-2 mx-auto'>
                             <Image
                              src="/Images/Tubes with money and coins.svg"
                              alt=''
                              width={34}
                              height={24}
                              className=''
                              />
                            <h2 className='text-[16px] mt-1'>Fund Account</h2>
                          </div>
                        </div>
                         {/* item 2 */}
                        <div className='flex flex-row w-[180px] h-[56px] rounded-[8px] py-[12px] ml-6 border 
                        text-white border-[#244E43] bg-[#0D0D0D] '>
                          <div className='flex flex-row w-[146px] h-[32px] gap-2 mx-auto'>
                             <Image
                              src="/Images/mobile credit card and money (1).svg"
                              alt=''
                              width={34}
                              height={24}
                              className=''
                              />
                            <h2 className='text-[16px] mt-1'>Fund Account</h2>
                          </div>
                        </div>
                    </div>
                    <div className='absolute top-[41rem] right-5 w-[382px] h-[100px] rounded-[8px]'>
                      <Image
                        src="/Images/Withdraw Fund (1).svg"
                        alt=''
                        width={382}
                        height={100}
                        className=''
                        />    
                    </div>           
    </div>
  )
}

export default Mobile