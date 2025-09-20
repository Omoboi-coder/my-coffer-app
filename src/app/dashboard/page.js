"use client"
import React, { useState } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import Image from 'next/image'
import Mobile from './mobile'
import Typography from '@mui/material/Typography'
import ReusableDialog, { StyledTextField } from '../Components/ReusableDialog'

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [fundAmount, setFundAmount] = useState('')
  const [withdrawOpen, setWithdrawOpen] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [withdrawMethod, setWithdrawMethod] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setFundAmount('')
  }

  const handleFundAccount = () => {
    console.log('Funding account with:', { fundAmount })
    handleClose()
  }

  const handleWithdrawOpen = () => {
    setWithdrawOpen(true)
  }

  const handleWithdrawClose = () => {
    setWithdrawOpen(false)
    setWithdrawAmount('')
    setWithdrawMethod('')
  }

  const handleWithdraw = () => {
    console.log('Withdrawing:', { withdrawAmount, withdrawMethod })
    handleWithdrawClose()
  }

  // Custom title component for Fund Account dialog
 const FundAccountTitle = (
  <>
    <Typography sx={{
      fontSize: '24px',
      fontWeight: 700,
      color: '#ffffff',
      width: '230px',
      marginBottom: '8px',
      marginLeft: '10px',
    }}>
      Fund Your Account
    </Typography>
    
    <Typography sx={{
      fontSize: '14px',
      color: '#ffffff',
      lineHeight: 1.4,
      width: '300px',
      marginLeft: '10px',
    }}>
      Amount funded into your account will be added directly from connected wallet
    </Typography>
  </>
);

  // Fund Account dialog content
  const FundAccountContent = (
    <div style={{ display: 'flex', flexDirection: 'column', margin:'0 25px 0 25px'}}>
      <div style={{width:'231px', height:'70px', gap: '8px',  margin: '40px auto 0 auto'  }}>
        <Typography  sx={{ color: '#ffffff', fontSize: '12px', textAlign:'center' }}>
          Enter amount to add to your account     
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', width:'97px', height:'40px', margin:' auto' }}>
          <Typography  sx={{ color: '#ffffff', fontSize: '24px', gap: '4px', marginTop:'8px' }}>
            $ 
          </Typography>
          <Typography sx={{ color: '#ffffff', fontSize: '36px' }}>
            0.00
          </Typography>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', width:'458px', height:'24px',
        marginTop:'120px', justifyContent:'space-between' }}>
        <Typography sx={{ color: '#ffffff', fontSize: '14px' }}>
          Wallet Address:Asdhj6823hdjhdj
        </Typography>
        <Typography sx={{ color: '#ffffff', fontSize: '36px' }}>
          <Image
            src='/Images/copy.svg'
            alt='copy address image'
            width='24'
            height='24'
            className='w-[24px] h-[24px] '
          />
        </Typography>   
      </div>
    </div>
  )

  // Withdraw Fund dialog content
  const WithdrawFundContent = (
    <div style={{ display: 'flex', flexDirection: 'column', width:'458px', gap: '24px', margin:'15px auto 0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography sx={{ color: '#B6B6B6', fontSize: '12px' }}>
          Amount to Withdraw
        </Typography>
        <StyledTextField
          type="number"
          fullWidth
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          placeholder="0.00"
          InputProps={{
            startAdornment: <Typography sx={{ color: '#B6B6B6', mr: 1 }}>$</Typography>,
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography sx={{ color: '#B6B6B6', fontSize: '12px' }}>
          Withdraw Destination (USDT Wallet)
        </Typography>
        <StyledTextField
          type="text"
          fullWidth
          value={withdrawMethod}
          onChange={(e) => setWithdrawMethod(e.target.value)}
          placeholder="Asd7383ndjhdj"
        />
      </div>
    </div>
  )

  return (
    <DashboardLayout>
      <section className='flex flex-col md:flex-wrap 2xl:mx-auto w-full h-full
       md:max-w-[1096px] md:h-[1000px] relative'>
         {/* Logo & dashboard */}
        <div className='hidden flex-col md:flex md:w-[235px] md:h-[112px] text-white md:text-[45px] md:mt-4 space-y-5'>
        <Image
        src="/Images/FourthCanvas - jpeg 0.svg"
        alt=''
        width={36}
        height={36}
        />
        <h1>Dashboard</h1>
      </div>
      {/* search div */}
      <div className='flex flex-row md:absolute md:right-5 md:top-20 max-w-[382px] md:w-[285px] h-[40px] 
        md:h-[50px] rounded-[12px] text-[12px] text-[#B6B6B6] md:p-4 p-2.5 mx-5 md:mx-0 gap-2
        border border-[#353535]'>
     <div className='flex flex-row w-[63px] h-[18px] gap-2 mb-1 md:mb-0'>
       <Image
        src="/Images/search-normal.svg"
        alt=''
        width={12}
        height={12}
        className='w-[12px] h-[12px]'
        />
        <p>search</p> 
        </div>
      </div>

      <Mobile />

      {/* outer div */}
      <div className='hidden flex-col md:flex md:w-[770px] md:h-[548px] rounded-[12px] mt-8 border md:bg-[#282828]'>
        {/* div 1 */}
        <div className='flex flex-row w-[406px] h-[128px] md:w-[718px] md:h-[200px] gap-[8px] 
        md:gap-[18px] md:mt-10 ml-6 overflow-hidden'>
          {/* image 1 */}
          <div className='flex w-[300px] h-[128px] md:w-[290px] md:h-[200px] relative rounded-[8px]
           md:rounded-[16px] bg-[#EF6315]'>
            <div className='flex flex-col w-[134px] h-[96px] md:w-[201px] md:h-[152px] ml-0 md:ml-6 
            mt-4 text-white space-y-[40px] md:space-y-19'>
              <h2 className='text-[16px] md:text-[24px]'>Available Balance</h2>
              <div className='flex flex-row w-[126px] h-[32px] md:w-[180px] md:h-[40px]'>
                <p className='w-[120px] h-[40px] text-[24px] md:text-[35px]'>24,000</p>
                <p className='text-[16px] md:text-[24px] mt-2'>USDT</p>
              </div>
            </div>
            <Image
                src="/Images/Ellipse 44.svg"
                alt=''
                width={50}
                height={50}
                className='absolute top-0 left-[239px]'
                />
                 <Image
                src="/Images/Ellipse 45.svg"
                alt=''
                width={21}
                height={21}
                className='absolute top-[75px] left-[269px]'
                />
          </div>
          {/* image 2 */}
          <div className='flex flex-col w-[197px] h-[200px] rounded-[16px] bg-[#0F0F0F]'>
            <div className='flex flex-col w-[118px] h-[86px] md:w-[146px] md:h-[150px] 
            mx-auto text-center mt-6'>
               <Image
                src="/Images/money-send.svg"
                alt=''
                width={36}
                height={36}
                className='mx-auto w-[16px] h-[16px] md:w-[36px] md:h-[36px]'
                />
                <div className='w-[146px] h-[90px] mt-6 text-black space-y-2'>
                  <p className='text-[20px] text-white'>Salary Payouts</p>
                  <p className='text-[12px] text-white/70'>For November</p>
                  <p className='text-[16px] text-white/90'>$9800</p>
                </div>
            </div>
          </div>
          {/* image 3 */}
          <div className='flex flex-col w-[160px] h-[128px] md:w-[197px] md:h-[200px] rounded-[16px] bg-white'>
            <div className='flex flex-col w-[146px] h-[150px] mx-auto text-center mt-6'>
               <Image
                src="/Images/calendar-2 (2).svg"
                alt=''
                width={36}
                height={36}
                className='mx-auto'
                />
                <div className='w-[146px] h-[90px] mt-6 text-black space-y-2'>
                  <p className='text-[20px]'>Scheduled</p>
                  <p className='text-[12px]'>Outgoing Payments</p>
                  <p className='text-[16px]'>$7490</p>
                </div>
            </div>
          </div>
        </div>
        {/* div 2 */}
        <div className='flex flex-row md:w-[311px] h-[33px] text-[#63D9B9] text-[24px] mt-5 ml-6'>
          <p>Member of the Month</p>
           <Image
                src="/Images/arrow-up.svg"
                alt=''
                width={24}
                height={24}
                className='w-[24px] h-[24px] ml-4 mt-1.5'
                />
        </div>
        {/* div 3 */}
        <div className='flex flex-row md:w-[718px] md:h-[32px] justify-between mt-5 ml-6'>
          <h3 className='text-[24px] text-white'>Recent Activities</h3>
          <h5 className='text-[16px] text-[#63D9B9] opacity-70 mt-2'>View all</h5>
        </div>
        {/* div 4 */}
        <div className='flex flex-col md:w-[718px] md:h-[168px] gap-[12px] mt-5 ml-6'>
          {/* item 1 */}
          <div className='flex flex-row md:h-[48px] rounded-[8px] gap-6'>
            <div className=' flex flex-row md:w-[167px] md:h-[24px] my-3 ml-5 gap-2 text-[16px] text-white'>
              <Image
                src="/Images/wallet-money.svg"
                alt=''
                width={24}
                height={24}
                className=''
                />
                <p className='mt-0.5'>Fund Withdrawn</p>
            </div>
            <div className=' flex flex-row md:w-[237px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
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
          <div className='flex flex-row md:h-[48px] rounded-[8px] gap-6'>
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
            <div className=' flex flex-row md:w-[237px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
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
          <div className='flex flex-row md:h-[48px] rounded-[8px] gap-6'>
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
            <div className=' flex flex-row md:w-[237px] md:h-[24px] my-3 ml-5 gap-2 mt-3.5 text-[16px] text-white'>
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
         </div>

      {/* supply data container */}
       <div className='hidden md:flex md:w-[305px] md:h-[548px] p-4 absolute top-40 right-2 bg-[#0D0D0D]
        border border-[#244E43] rounded-[16px] text-white'>
         <div className='md:w-[275px] h-[518px]'>
          {/* item 1 */}
          <div className='flex flex-row md:w-[269px] md:h-[40px] gap-[10px]
           text-[32px] text-white'>
            <Image
             src="/Images/bx_bx-line-chart.svg"
             alt=''
             width={24}
             height={24} 
             className='mt-2'
             />
             <h2>Supplied data</h2>
          </div>
          {/* item 2 */}
            <Image
             src="/Images/chart-graphic.svg"
             alt=''
             width={310}
             height={208}
             className='mt-10'
             />
             {/* item 3 */}
             <div className='md:w-[274px] md:h-[172px] space-y-3 mt-15'>
               {/* div 1 */}
              <div className='flex flex-row md:w-[198px] md:h-[40px] gap-[10px] text-[16px'>
              <div className='flex flex-row w-[66px] h-[24px] gap-[10px] mt-2'>
             <Image
             src="/Images/Ellipse 42.svg"
             alt=''
             width={16}
             height={16}
             className='mb-1'
             />
             <p>2022</p>
             </div>

           <div className='flex flex-row w-[66px] h-[24px] gap-[10px] mt-2'>
             <Image
             src="/Images/Ellipse 42.svg"
             alt=''
             width={16}
             height={16}
             className='mb-1'
             />
             <p>2022</p>
             </div>
            </div>
            <h2 className='text-[23px]'>Value of transactions over the years</h2>
            <h3 className='text-[16px]'>Analyzing the fluctuations in transaction values over the years</h3>
           </div>
         </div>
       </div>

        {/* div 5 */}
        <div className='hidden md:flex flex-col md:flex-row md:w-[768px] md:h-[200px] gap-6 mt-10'>
          {/* item 1 - Fund Account (clickable) */}
          <div 
            className='flex flex-row w-[400px] h-[200px] rounded-[16px] border 
            text-white border-[#244E43] bg-[#0D0D0D] cursor-pointer hover:bg-[#1a1a1a] 
            transition-colors duration-200 '
            onClick={handleClickOpen}
          >
            <div className='flex flex-col w-[220px] h-[144px] gap-3 ml-6 mt-8'>
              <h2 className='text-[24px]'>Fund Account</h2>
              <p className='w-[180px] text-[16px]'>Add Fund directly from your wallet 
                account and get your account funded instantly</p>
            </div>
            <Image
                src="/Images/Tubes with money and coins.svg"
                alt=''
                width={114}
                height={80}
                className=''
                />
          </div>
         {/* item 2 - Withdraw Fund (make it clickable) */}
      <div 
        className='flex flex-row w-[400px] h-[200px] rounded-[16px] border 
       text-white border-[#244E43] bg-[#0D0D0D] cursor-pointer hover:bg-[#1a1a1a] 
        transition-colors duration-200'
        onClick={handleWithdrawOpen}
          >
       {/* Keep existing content unchanged */}
          <div className='flex flex-col w-[220px] h-[120px] gap-3 ml-6 mt-8'>
                 <h2 className='text-[24px]'>Withdraw Fund</h2>
          <p className='w-[180px] h-[72px] text-[16px]'>Withdraw Fund from your Account
             directly to wallet account without delay</p>
        </div>
      <Image
         src="/Images/mobile credit card and money (1).svg"
          alt=''
          width={120}
           height={80}
          className=''
          />
      </div>
        </div>
          <div className='hidden md:flex absolute top-[46.8rem] right-2 w-75 h-50 rounded-[16px]'>
           <Image
             src="/Images/Withdraw Fund.svg"
             alt=''
             fill
             className='object-contain'
           />
      </div> 

      {/* Fund Account Dialog */}
      <ReusableDialog
        open={open}
        onClose={handleClose}
        buttonText="Fund Account"
        onSubmit={handleFundAccount}
        customTitleComponent={FundAccountTitle}
      >
        {FundAccountContent}
      </ReusableDialog>

      {/* Withdraw Fund Dialog */}
      <ReusableDialog
        open={withdrawOpen}
        onClose={handleWithdrawClose}
        title="Withdraw Funds"
        subtitle="Employee salaries will be sent out on the scheduled date and time"
        buttonText="Withdraw Funds"
        onSubmit={handleWithdraw}
      >
        {WithdrawFundContent}
      </ReusableDialog>

      </section>
  </DashboardLayout>
  )
}

export default Dashboard