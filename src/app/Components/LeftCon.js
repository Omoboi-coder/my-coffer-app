import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LeftCon = () => {
  return (
    <>
        {/* container 1 */}
            <div className='flex flex-col mx-auto bg-coffer-dark md:w-[235px] md:h-[1000px] border-2 border-r-[#4E4E4E]'>
                {/* nav Logo */}
                <div className="flex mt-8 mx-auto">
                <Image
                 src="/Images/Logo+Name.svg"
                 alt="Logo"
                 width={30}
                 height={10}
                 className="w-[170px] h-[36px] md:w-[180px] md:h-[48px]"
                />
                </div>
                    {/*outer div*/}
                  <div className='w-[180px] h-[295px] ml-8 mt-15 text-[16px] p-[8px]'>
                    <h5 className='text-[16px] text-[#949494]'>Admin Tools</h5>
                    <div className='w-[141px] h-[260px] p-[4px] ml-6 space-y-6'>
                      {/* Dashboard */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/element-3 (2).svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         />
                         <Link href="/dashboard" className='text-[16px] text-white mt-1.5 cursor-pointer'>Dashboard</Link>
                      </div>

                      {/* Activity */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/activity.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         />
                         <Link href="/activity" className='text-[16px] text-white mt-1.5 cursor-pointer'>Activity</Link>
                      </div>
    
                      {/* Schedule */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/calendar-2.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/schedule" className='text-[16px] text-white mt-1.5 cursor-pointer'>Schedule</Link>
                      </div>

                       {/* Members */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/people.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/members" className='text-[16px] text-white mt-1.5 cursor-pointer'>Members</Link>
                      </div>

                       {/* Payouts */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/money-send.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         className=" "
                         />
                         <Link href="/payouts" className='text-[16px] text-white mt-1.5 cursor-pointer'>Payouts</Link>
                      </div>
                    </div>
                  </div>
                  {/* border div */}
                  <div className='w-[197px] h-0 mx-auto border border-[#4E4E4E] mt-[7rem]'></div>
                  {/* insight div */}
                  <div className='w-[180px] h-[220px] gap-2 text-[16px] ml-8 mt-4 p-2'>
                    <h5 className='text-[#949494] mb-2'>Insights</h5>
                    {/* inner div */}
                    <div className='h-[168px] ml-6 space-y-7'>
                        {/* Profile */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/profile-circle.svg"   
                         alt="Logo"
                         width={24}
                         height={24}
                         />
                         <Link href="/profile" className='text-[16px] text-white mt-1.5 cursor-pointer'>profile</Link>
                      </div>
                       {/* notification */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/notification-bing.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         />
                         <Link href="/notification" className='text-[16px] text-white mt-1.5 cursor-pointer'>Notification</Link>
                      </div>
                       {/* settings */}
                      <div className='flex flex-row gap-2 w-[133px] h-[32px]'>
                        <Image
                         src="/Images/setting-2.svg"
                         alt="Logo"
                         width={24}
                         height={24}
                         />
                         <Link href="/settings" className='text-[16px] text-white mt-1.5 cursor-pointer'>settings</Link>
                      </div>
                    </div>
                  </div>
                  {/* attendance link */}
                  <div className='flex flex-row w-[170px] h-[20px] mx-auto mt-6 justify-between'>
                    <p className=' text-[14px] text-white opacity-85'>Attendance Link</p>
                    <Image
                    src="/Images/copy.svg"
                    alt=''
                    width="16"
                    height="16"
                    />
                  </div>
                  {/* address */}
                  <div className='flex flex-row w-[170px] h-[48px] text-[14px] text-white rounded-[8px] mt-8
                   ml-8 py-3 px-3 gap-2 bg-[#282828]'>
                    <Image
                    src="/Images/MetaMask - jpeg 0.svg"
                    alt=''
                    width="24"
                    height="24"
                    />
                    <p className='mt-0.5'>ADGJ163738JKJK</p>
                  </div>
            </div>
    </>
  )
}

export default LeftCon