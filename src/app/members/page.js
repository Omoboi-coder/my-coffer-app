'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import DashboardLayout from '../Components/DashboardLayout'
import ReusableDialog, { StyledTextField } from '../Components/ReusableDialog'
import { Typography } from '@mui/material'
import Link from 'next/link'

const Members = () => {
  // Dialog state management
  const [open, setOpen] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    walletAddress: '',
    position: '',
    salary: ''
  })
  
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleOpenSecond = () => setOpenSecond(true)
  const handleCloseSecond = () => setOpenSecond(false)
  
  const handleSubmit = () => {
    handleClose()
    handleOpenSecond() 
  }

  const handleFinalSubmit = () => {
    console.log('Adding member:', formData)
    handleCloseSecond()
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      walletAddress: '',
      position: '',
      salary: ''
    })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Replace your existing dialogConfig with this mobile-responsive version

const dialogConfig = {
  titleStyle: {
    fontSize: { xs: '20px', md: '28px' },
    height: { xs: 'auto', md: '110px' },
    paddingLeft: { xs: '25px !important', md: '35px !important' },
    paddingRight: { xs: '0', md: '0' },
    '& .MuiTypography-subtitle1': {
      minWidth: { xs: '303px', md: '303px' },
      fontSize: { xs: '14px', md: '14px' },
       lineHeight: { xs: 1.4, md: 1.5 }, 
    }
  },
  contentStyle: {
    minWidth: { xs: '280px', md: '458px' },
    minHeight: { xs: 'auto', md: '254px' },
    padding: { xs: '8px', md: '0 5px'  },
    maxWidth: { xs: '100%', md: 'none' },
  },
  buttonStyle: {
    minWidth: { xs: 'calc(100% - 32px)', md: '470px' },
    maxWidth: { xs: '100%', md: '470px' },
    minHeight: '48px',
    margin: { xs: '0 16px 16px 16px', md: '0 15px auto 15px' },
    marginBottom: { xs: '16px', md: '10px' },
    display: 'block',
    width: { xs: 'auto', md: 'auto' },
  }
}

// Also update your FirstDialogContent with better mobile styling
const FirstDialogContent = (
  <div style={{
    display:'flex', 
    flexDirection:'column', 
    gap:'16px',
    marginTop:'10px', 
    marginRight:'10px',
    marginLeft:'10px',
    width: { xs:'254px', md:'458px'},
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <Typography sx={{ 
        color: '#B6B6B6', 
        fontSize: { xs: '11px', md: '12px' }
      }}>
        Full Name
      </Typography>
      <StyledTextField
        type="text"
        value={formData.fullName}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
        placeholder="Enter full name"
        style={{ width: '100%'}}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: { xs: '44px', md: '48px' },
            fontSize: { xs: '14px', md: '16px' }
          }
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <Typography sx={{ 
        color: '#B6B6B6', 
        fontSize: { xs: '11px', md: '12px' }
      }}>
        Email Address
      </Typography>
      <StyledTextField
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="Abc123@gmail.com"
        style={{ width: '100%' }}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: { xs: '44px', md: '48px' },
            fontSize: { xs: '14px', md: '16px' }
          }
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <Typography sx={{ 
        color: '#B6B6B6', 
        fontSize: { xs: '11px', md: '12px' }
      }}>
        Wallet Address
      </Typography>
      <StyledTextField
        type="text"
        value={formData.walletAddress}
        onChange={(e) => handleInputChange('walletAddress', e.target.value)}
        placeholder="Asd7383ndjhdj"
        style={{ width: '100%' }}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: { xs: '44px', md: '48px' },
            fontSize: { xs: '14px', md: '16px' }
          }
        }}
      />
    </div>
  </div>
)

// And update your SecondDialogContent similarly
const SecondDialogContent = (
  <div style={{
    display:'flex', 
    flexDirection:'column', 
    gap:'16px',
    marginTop:'10px', 
    marginLeft:'10px', 
    marginRight:'10px',
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Typography sx={{ 
        color: '#B6B6B6', 
        fontSize: { xs: '11px', md: '12px' }
      }}>
        Position
      </Typography>
      <StyledTextField
        type="text"
        value={formData.position}
        onChange={(e) => handleInputChange('position', e.target.value)}
        placeholder="Enter position"
        sx={{
          '& .MuiOutlinedInput-root': {
            height: { xs: '44px', md: '48px' },
            fontSize: { xs: '14px', md: '16px' }
          }
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Typography sx={{ 
        color: '#B6B6B6', 
        fontSize: { xs: '11px', md: '12px' }
      }}>
        Salary
      </Typography>
      <StyledTextField
        type="number"
        value={formData.salary}
        onChange={(e) => handleInputChange('salary', e.target.value)}
        placeholder="100"
        InputProps={{
          startAdornment: <Typography sx={{ color: '#B6B6B6', mr: 1 }}>$</Typography>,
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: { xs: '44px', md: '48px' },
            fontSize: { xs: '14px', md: '16px' }
          }
        }}
      />
    </div>
  </div>
)
  
  return (
    <DashboardLayout>
        <section className='flex flex-col md:flex-wrap 2xl:mx-auto relative 
        pb-[40rem] md:pb-0 w-full h-full md:h-[1000px]'>
        <div className='hidden md:flex flex-col md:w-[198px] md:h-[112px] gap-[24px] mt-8'>
            <div className='flex flex-row h-[36px] gap-1'>
            <Image
            src="/Images/FourthCanvas - jpeg 0.svg"
            alt='Canvas Logo'
            width={36}
            height={36}
            />
            <Image
            src="/Images/FourthCanvas - png 0.svg"
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
          <div className=' flex flex-row w-[104px] h-[40px] md:w-[93px] md:h-[52px] px-2 md:px-0 
          py-[8px] md:py-[14px] rounded-[8px] md:mt-10 mt-5 ml-[18.5rem] md:ml-0 border border-[#D9D9D9] md:border-0'>
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
          <Link href="/attendance">
          <button className='w-[196px] md:w-[188px] h-[52px] rounded-[8px] gap-[10px] text-center
           absolute top-[40rem] text-[#63D9B9] border border-[#63D9B9] left-30 md:left-[39rem] md:absolute
           md:top-46 py-[14px] px-[28px] md:px-[26px]'>
            <span>View Attendance</span>
          </button>
          </Link>
          {/* button 2 */}
          <button className='w-[196px] md:w-[195px] h-[52px] rounded-[8px] gap-[10px] text-center text-[#010101]  absolute top-[40rem]
           left-30 md:left-[52rem] md:absolute md:top-46 py-[14px] px-[28px] md:px-[48px] bg-[#63D9B9] cursor-pointer' onClick={handleOpen}>
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
              <p className='text-[15px]'>Ellaroberts34@gmail.com</p>
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
             <div className='flex flex-row md:w-[177px] md:h-[32px] md:gap-[18px] text-[24px]'>
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
          <div className='hidden md:flex flex-col md:w-[192px] md:h-[136px] md:gap-[72px] text-white 
          absolute top-[17.5rem] left-[15rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:gap-[24px] text-[24px]'>
              <p>Email Address</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[190px] md:h-[24px] text-[15.5px]'>
              <p>Ellaroberts34@gmail.com</p>
             </div>
          </div>
           {/* schedule div 3 */}
          <div className='hidden md:flex flex-col md:w-[175px] md:h-[136px] md:gap-[77px] text-white 
          absolute top-[17.5rem] left-[31rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:w-[175px] md:h-[32px] text-[24px]'>
              <p>Wallet Address</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[140px] md:h-[24px] text-[16px]'>
              <p>HS9NNS77383GHJ</p>
             </div>
          </div>
           {/* schedule div 4 */}
          <div className='hidden md:flex flex-col md:w-[96px] md:h-[136px] md:gap-[72px] text-white 
          absolute top-[17.5rem] left-[45rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row text-[24px]'>
              <p>Position</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[96px] md:h-[24px] text-[16px]'>
              <p>UI Engineer</p>
             </div>
          </div>
          {/* schedule div 5 */}
          <div className='hidden md:flex flex-col md:w-[125px] md:h-[136px] md:gap-[72px] text-white 
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

        {/* First Dialog - Personal Information */}
        <ReusableDialog
          open={open}
          onClose={handleClose}
          title="Add Member"
          subtitle="Members added can be scheduled to get their salary paid on a set date and time"
          buttonText="Next Step"
          onSubmit={handleSubmit}
          titleStyle={dialogConfig.titleStyle}
          contentStyle={dialogConfig.contentStyle}
          buttonStyle={dialogConfig.buttonStyle}
        >
          {FirstDialogContent}
        </ReusableDialog>

        {/* Second Dialog - Job Information */}
        <ReusableDialog
          open={openSecond}
          onClose={handleCloseSecond}
          title="Add Member"
          subtitle="Members added can be scheduled to get their salary paid on a set date and time"
          buttonText="Add Member"
          onSubmit={handleFinalSubmit}
         titleStyle={dialogConfig.titleStyle}
         contentStyle={dialogConfig.contentStyle}
         buttonStyle={dialogConfig.buttonStyle}
        >
          {SecondDialogContent}
        </ReusableDialog>
    </DashboardLayout>
  )
}

export default Members