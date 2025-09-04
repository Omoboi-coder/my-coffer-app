import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-coffer-dark'>
        {/* flex container */}
        <div className='hidden md:flex flex-row relative mx-auto md:gap-0 md:py-0 md:max-w-[1728px] md:h-[464px]'>
       {/* desktop footer */}
        {/* Logo */}
        <Image
        src="/Images/Logo+Name.svg"
        alt="Coffer Logo"   
        width={227}
        height={48}
        className="md:w-[227px] md:h-[48px] mt-10 ml-10"
        />
        {/* input div */}
        <div className='flex flex-col absolute top-32 left-10 w-[352px] h-[200px] md:w-[450px] md:h-[270px] space-y-13'>
           <div className='flex flex-col gap-4'>
            <h5 className='text-[16px] text-white shadow'>Stay updated with</h5>
            <h2 className='w-[450px] text-[48px] text-white leading-14'>Payclick by signing up for our newsletter</h2>
            </div> 
            <input type="text" placeholder='Email address'
            className='relative w-[352px] h-[56px] md:w-[432px] md:min-h-[64px] bg-[#63D9B9] rounded-[36px]
            border-2 border-white placeholder:text-[#000000] placeholder:text-[14px] px-4 py-2'
            />
            <button className='absolute top-51 left-65 w-[100px] h-[40px] md:w-[174px] md:h-[64px] bg-[#010101] rounded-[36px] 
            border border-y-white border-r-white text-[14px] md:text-[16px] py-[20px] text-[#63D9B9]'>
            Subscribe
            </button>   
        </div>
        {/* Links */}
        <div className='flex flex-row md:w-[755px] md:h-[176px] gap-[35px] mt-2 md:mt-10 ml-0 md:ml-[18rem] '>
            {/* col 1 */}
            <div className='flex flex-col md:w-[116px] md:h-[176px] gap-6 text-white'>
                <h3 className='text-[32px]'>Explore</h3>
                <div className='flex flex-col w-[102px] h-[104px] text-[16px] gap-4'>
                    <p>Design</p>
                    <p>Development</p>
                    <p>Desktop App</p>
                </div>

            </div>
             {/* col 2 */}
            <div className='flex flex-col md:w-[162px] md:h-[176px] gap-6 text-white'>
                <h3 className='text-[32px]'>Resources</h3>
                <div className='flex flex-col w-[105px] h-[104px] text-[16px] gap-4'>
                    <p>Developer API</p>
                    <p>Tools</p>
                    <p>Blog</p>
                </div>
            </div>
            {/* col 3*/}
            <div className='flex flex-col md:w-[146px] md:h-[176px] gap-6 text-white'>
                <h3 className='text-[32px]'>Company</h3>
                <div className='flex flex-col w-[86px] h-[104px] text-[16px] gap-4'>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Our Team</p>
                </div>
            </div>
            {/* col 4 */}
            <div className='flex flex-col md:w-[84px] md:h-[176px] gap-6 text-white'>
                <h3 className='text-[32px]'>Legal</h3>
                <div className='flex flex-col w-[68px] h-[104px] text-[16px] gap-4'>
                    <p>Privacy</p>
                    <p>Licenses</p>
                    <p>Cookies</p>
                </div>
            </div>
            {/* col 5 */}
            <div className='flex flex-col md:w-[128px] md:h-[136px] gap-6 text-white'>
                <h3 className='text-[32px]'>Help</h3>
                <div className='flex flex-col w-[128px] h-[64px] text-[16px] gap-4'>
                    <p>Terms of Service</p>
                    <p>FAQs</p>
                </div>
            </div>

        </div>
        {/* connect & social media*/}
        <div className='flex flex-row absolute top-[22.3rem] left-[34.7rem] w-[230px] h-[24px] text-white gap-6'>
            <p>Connect with us</p>
        {/* social icons */}
            <div className='flex flex-row w-[80px] h-[16px] gap-4 mt-1'>
                <Image
                src="/Images/facebook.svg"
                alt="Facebook Icon"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
                />
                <Image
                src="/Images/Twitter (1).svg"
                alt="Twitter Icon"
                width={16}
                height={14}
                className="w-[16px] h-[14px]"
                />
                <Image
                src="/Images/instagram.svg"
                alt="Instagram Icon"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
                />
            </div>
        </div>
        {/* footer */}
        <div className='flex flex-row absolute bottom-1 h-[24px] md:w-[1350px] md:h-[40px] text-white text-[14px]
        md:text-[16px] gap-4 md:gap-16 border-1 border-t-[#4E4E4E] border-x-0 border-b-0'>
            <p className='pt-2.5 ml-[2rem]'>&copy; Payclick 2025 All rights reserved.</p>
            <p className='pt-2.5'>Privacy Policy</p>
            <p className='pt-2.5'>Payclick for Companies</p>
        </div>
    </div>

    {/* flex container */}
        <div className='flex md:hidden flex-col relative mx-auto w-full h-[478px] gap-10 py-4'>
       {/* mobile footer */}
       <div className='flex flex-col mx-auto w-[382px] h-[407px]'>
        <div className='flex flex-row w-[380px] h-[24px] space-x-24 mx-auto '>
        {/* Logo */}
        <Image
        src="/Images/Logo+Name.svg"
        alt="Coffer Logo"   
        width={114}
        height={24}
        className="w-[114px] h-[24px]"
        />
          {/* connect & social media*/}
        <div className='flex flex-row w-[170px] h-[24px] pt-1 text-white gap-4'>
            <p className='text-[12px] mt-0.5'>Connect with us</p>
        {/* social icons */}
            <div className='flex flex-row w-[66px] h-[12px] gap-4 mt-1'>
                <Image
                src="/Images/facebook.svg"
                alt="Facebook Icon"
                width={12}
                height={12}
                className="w-[12px] h-[12px]"
                />
                <Image
                src="/Images/Twitter (1).svg"
                alt="Twitter Icon"
                width={10}
                height={10}
                className="w-[10px] h-[10px]"
                />
                <Image
                src="/Images/instagram.svg"
                alt="Instagram Icon"
                width={12}
                height={12}
                className="w-[12px] h-[12px]"
                />
            </div>
         </div>
        </div>
         {/* input div */}
        <div className='flex flex-col w-[382px] h-[180px] space-y-4 mt-5'>
           <div className='flex flex-col gap-[4px]'>
            <h5 className='text-[15px] text-white'>Stay updated with</h5>
            <h2 className='w-[342px] h-[64px] text-[20px] text-white leading-8'>Payclick by signing up for our newsletter</h2>
            </div> 
            <input type="text" placeholder='Email address'
            className='relative w-[382px] h-[50px] bg-[#63D9B9] rounded-[36px]
            border-2 border-white placeholder:text-[#000000] placeholder:text-[14px] px-4 py-2'
            />
            <button className='absolute top-42 left-70 w-[120px] h-[48px] bg-[#010101] rounded-[36px] 
            border border-y-white border-r-white text-[16px] py-[10px] text-[#63D9B9]'>
            Subscribe
            </button>   
        </div>
        {/* Links */}
        <div className='flex flex-wrap w-[381px] h-[168px] justify-between  mt-4 '>
            {/* col 1 */}
            <div className='flex flex-col w-[77px] h-[132px] gap-4 text-white'>
                <h3 className='text-[16px]'>Explore</h3>
                <div className='flex flex-col w-[77px] h-[92px] text-[12px] gap-4'>
                    <p>Design</p>
                    <p>Development</p>
                    <p>Desktop App</p>
                </div>

            </div>
             {/* col 2 */}
            <div className='flex flex-col w-[81px] h-[132px] gap-4 text-white'>
                <h3 className='text-[16px]'>Resources</h3>
                <div className='flex flex-col w-[79px] h-[92px] text-[12px] gap-4'>
                    <p>Developer API</p>
                    <p>Tools</p>
                    <p>Blog</p>
                </div>
            </div>
            {/* col 3*/}
            <div className='flex flex-col w-[73px] h-[132px] gap-6 text-white'>
                <h3 className='text-[16px]'>Company</h3>
                <div className='flex flex-col w-[65px] h-[92px] text-[12px] gap-4'>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Our Team</p>
                </div>
            </div>
            {/* col 4 */}
            <div className='flex flex-col w-[51px] h-[132px] gap-4 text-white'>
                <h3 className='text-[16px]'>Legal</h3>
                <div className='flex flex-col w-[51px] h-[92px] text-[12px] gap-4'>
                    <p>Privacy</p>
                    <p>Licenses</p>
                    <p>Cookies</p>
                </div>
            </div>
            {/* col 5 */}
            <div className='flex row w-[140px] h-[20px] justify-between text-[12px] text-white mt-4'>
                    <p>Terms of Service</p>
                    <p>FAQs</p>
                </div>
            </div>
        </div>
        
        {/* footer */}
        <div className='flex flex-row absolute bottom-4 w-full h-[24px] text-white text-[12px]
        gap-4 border-1 border-t-[#4E4E4E] border-x-0 border-b-0'>
            <p className='mt-0.5 ml-[1.5rem]'>&copy; Payclick 2025 All rights reserved.</p>
            <p className='mt-0.5'>Privacy Policy</p>
            
         


        </div>
    </div>

</footer>
  )
}

export default Footer