"use client"
import React, { useState } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import Image from 'next/image'
import ReusableDialog, { StyledTextField } from '../Components/ReusableDialog'
import { Typography } from '@mui/material'
import { InputAdornment } from '@mui/material';
import { Menu, MenuItem } from '@mui/material'

const Schedule = () => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    walletAddress: '',
    date: '',
    time: ''
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Form submitted:', formData)
    handleClose()
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const menuOpen = Boolean(anchorEl)

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  // Dialog Configuration for ReusableDialog
  const titleStyle = {
    fontSize: { xs: '24px', md: '28px' },
    paddingLeft: { xs: '24px', md: '35px' },
    paddingRight: { xs: '24px', md: '35px' },
    lineHeight: { xs: 1.2, md: 1.3 },
    '& .MuiTypography-subtitle1': {
      width: { xs: '280px', md: '303px' },
      fontSize: { xs: '12px', md: '14px' },
      lineHeight: { xs: 1.1, md: 1.2 },
      marginTop: { xs: '4px', md: '6px' },
      marginBottom: 0,
    }
  }
  
  const contentStyle = {
    paddingLeft: { xs: '24px', md: '35px' },
    paddingRight: { xs: '24px', md: '35px' },
    paddingTop: '0px',
    paddingBottom: { xs: '16px', md: '24px' },
  }
  
  const buttonStyle = {
    minWidth: { xs: '320px', md: '458px' },
    maxWidth: { xs: '320px', md: '458px' },
    width: { xs: '320px', md: '458px' },
    minHeight: '52px',
  }

  // Schedule Dialog Content
  const ScheduleDialogContent = (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      marginTop: '-20px',
      width: '100%'
    }}>
      {/* Wallet Address Field */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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

      {/* Date and Time Row */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row',
        width: '100%',
        gap: '24px'
      }}>
        {/* Date Field */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          width: '50%'
        }}>
          <Typography sx={{ 
            color: '#B6B6B6', 
            fontSize: { xs: '11px', md: '12px' }
          }}>
            Date
          </Typography>
          <StyledTextField
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            placeholder="11/12/2023"
            style={{ width: '100%' }}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: { xs: '44px', md: '48px' },
                fontSize: { xs: '14px', md: '16px' }
              }
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Image 
                      src="/Images/calendar-2.svg" 
                      alt="Calendar" 
                      width={24}
                      height={24}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        console.log('Calendar clicked');
                        // Add date picker logic here
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        {/* Time Field */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          width: '50%'
        }}>
          <Typography sx={{ 
            color: '#B6B6B6', 
            fontSize: { xs: '11px', md: '12px' }
          }}>
            Time
          </Typography>
          <StyledTextField
            value={formData.time}
            onChange={(e) => handleInputChange('time', e.target.value)}
            placeholder="02:00 pm"
            style={{ width: '100%' }}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: { xs: '44px', md: '48px' },
                fontSize: { xs: '14px', md: '16px' }
              }
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Image 
                      src="/Images/clock.svg" 
                      alt="Clock" 
                      width={24}
                      height={24}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        console.log('Clock clicked');
                        // Add time picker logic here
                      }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
      </div>
    </div>
  )

  return (
    <DashboardLayout>
      <section className='flex flex-col md:flex-wrap 2xl:mx-auto relative 
         w-full h-full md:h-[1000px] pb-[40rem] md:pb-0'>
        <div className='hidden md:flex flex-col md:w-[205px] md:h-[112px] gap-[24px] mt-8'>
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
            <p className='text-[45px] text-white'>Schedule</p>
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
          <div className=' flex flex-row w-[104px] h-[40px] md:w-[189px] md:h-[48px] px-[8px] md:px-[48px]
          py-[8px] md:py-[12px] rounded-[8px] md:mt-10 mt-5 ml-[18.5rem] md:ml-0 border border-[#D9D9D9] cursor-pointer'
          onClick={handleMenuClick}>
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
          {/* button */}
          <div 
            className='w-[196px] md:w-[243px] h-[52px] rounded-[8px] gap-[10px] absolute top-[40rem]
           left-30 md:left-[49rem] md:absolute md:top-46 py-[14px] px-[25px] md:px-[28px] text-center bg-[#63D9B9] cursor-pointer'
            onClick={handleOpen}
          >
            <span>Schedule Payment</span>
          </div>
          {/* mobile schedule div */}
          <div className='flex md:hidden flex-row w-[377px] h-[56px] text-white mx-6 
          gap-[32px] mt-6 relative opacity-90'>
            <div className='flex flex-row w-[143px] h-[32px] gap-[8px] text-[20px]'>
            <Image
              src="/Images/Checkbox.svg"
              alt=''
              width={20}
              height={20}
              />
              <p>Ella Roberts</p>
             </div>
             <div className='flex flex-col w-[142px] h-[56px] gap-[8px] text-[16px]'>
                <span>$876</span>
                <span>HS9NNS77383GHJ</span>
             </div>
             <Image
              src="/Images/more.svg"
              alt=''
              width={24}
              height={24}
              className='absolute left-[22rem] top-4 cursor-pointer'
               onClick={handleMenuClick}
              />
          </div>
          {/* desktop schedule div */}
          <div className='hidden md:flex flex-col md:w-[177px] md:h-[136px] md:gap-[72px]
           text-white md:mt-12  opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:w-[109px] md:h-[32px] md:gap-[24px] text-[24px]'>
            <Image
              src="/Images/Checkbox.svg"
              alt=''
              width={20}
              height={20}
              className=''
              
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
          <div className='hidden md:flex flex-col md:w-[172px] md:h-[136px] md:gap-[72px] text-white 
          absolute top-[17.6rem] left-[15rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:gap-[24px] text-[24px]'>
              <p>Wallet Address</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[142px] md:h-[24px] md:gap-[24px] text-[16px]'>
              <p>HS9NNS77383GHJ</p>
             </div>
          </div>
           {/* schedule div 3 */}
          <div className='hidden md:flex flex-col md:w-[161px] md:h-[136px] md:gap-[72px] text-white 
          absolute top-[17.6rem] left-[30rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:gap-[24px] text-[24px]'>
              <p>Date</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[160px] md:h-[24px] md:gap-[24px] text-[16px]'>
              <p>12th December 2023</p>
             </div>
          </div>
           {/* schedule div 4 */}
          <div className='hidden md:flex flex-col md:w-[78px] md:h-[136px] md:gap-[72px] text-white 
          absolute top-[17.6rem] left-[45rem] opcaity-500'> 
            {/* item 1 */}
            <div className='flex flex-row md:gap-[24px] text-[24px]'>
              <p>Time</p>
             </div>
             {/* item 2 */}
             <div className='flex flex-row md:w-[78px] md:h-[24px]  text-[16px]'>
              <p>02: 00 pm</p>
             </div>
          </div>
          {/* schedule div 5 */}
          <div className='hidden md:flex flex-col md:w-[125px] md:h-[136px] md:gap-[72px] text-white 
          absolute top-[17.6rem] left-[56rem] opcaity-500'> 
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
              className='cursor-pointer'
               onClick={handleMenuClick}
              />
             </div>
          </div>
        </section>

      {/* Refactored ReusableDialog */}
      <ReusableDialog
        open={open}
        onClose={handleClose}
        title="Schedule Payment"
        subtitle="Employee salaries will be sent out on the scheduled date and time"
        onSubmit={handleSubmit}
        buttonText="Schedule Now"
        titleStyle={titleStyle}
        contentStyle={contentStyle}
        buttonStyle={buttonStyle}
      >
        {ScheduleDialogContent}
      </ReusableDialog>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#282828',
              color: 'white',
              '& .MuiMenuItem-root': {
                '&:hover': {
                  backgroundColor: '#282828',
                }
              }
            }
          }
        }}
      >
        <MenuItem onClick={handleMenuClose}>Sort by Date</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sort by Name</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sort by Amount</MenuItem>
      </Menu>
    </DashboardLayout>
  )
}

export default Schedule