"use client"
import React, { useState, useEffect } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import Image from 'next/image'
import ReusableDialog, { StyledTextField } from '../Components/ReusableDialog'
import { Typography, InputAdornment, Box, Button } from '@mui/material'
import CustomDialog from '../Components/CustomDialog'
import Link from 'next/link'

const Schedule = () => {  
  const [open, setOpen] = useState(false)
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const [sortMenuPosition, setSortMenuPosition] = useState({ x: 0, y: 0 })
  const [moreMenuPosition, setMoreMenuPosition] = useState({ x: 0, y: 0 })
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false) 
  const [confirmRemoveDialogOpen, setConfirmRemoveDialogOpen] = useState(false) 
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


  // Close menus when clicking outside
  useEffect(() => {
  const handleClickOutside = (event) => {
    // Check if the clicked element is inside the menu
    const isInsideMenu = event.target.closest('.bg-\\[\\#282828\\]');
    
    if ((showSortMenu || showMoreMenu) && !isInsideMenu) {
      setShowSortMenu(false);
      setShowMoreMenu(false);
    }
  };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSortMenu, showMoreMenu]);

  // Sort Popup Menu Component
  const SortPopupMenu = () => {
    if (!showSortMenu) return null;

    return (
      <div 
        className="fixed z-50 bg-[#282828] rounded-[8px] w-[152px] md:w-[182px] h-[170px]"
          style={{
          left: `${sortMenuPosition.x}px`,
          top: `${sortMenuPosition.y}px`,
        }}
      >
        <div className="py-2 ml-4">
          <div 
            className="px-4 py-2 text-white hover:bg-[#404040] cursor-pointer text-sm"
            onClick={() => {
              console.log('Sort by Salary');
              setShowSortMenu(false);
            }}
          >
            Salary
          </div>
          <div 
            className="px-4 py-2 text-white hover:bg-[#404040] cursor-pointer text-sm"
            onClick={() => {
              console.log('Sort by Date');
              setShowSortMenu(false);
            }}
          >
            Date
          </div>
          <div 
            className="px-4 py-2 text-white hover:bg-[#404040] cursor-pointer text-sm"
            onClick={() => {
              console.log('Sort by Time');
              setShowSortMenu(false);
            }}
          >
            Time
          </div>
           <div 
            className="px-4 py-2 text-white hover:bg-[#404040] cursor-pointer text-sm"
            onClick={() => {
              console.log('Sort by Position');
              setShowSortMenu(false);
            }}
          >
            Position
          </div>
        </div>
      </div>
    );
  };
  const handleMoreClick = (e, isMobile = false) => {
    e.stopPropagation(); // Prevent event bubbling
    const rect = e.currentTarget.getBoundingClientRect();
    
    if (isMobile) {
      // For mobile, position to the left of the more button
      setMoreMenuPosition({
        x: rect.left - 210, // Position to the left (160px is menu width)
        y: rect.top + 30 // Slightly lower than the button
      });
    } else {
      // For desktop, position to the right of the more button
      setMoreMenuPosition({
        x: rect.right - 265, // Position to the right with 10px gap
        y: rect.top - 20 // Slightly lower than the button
      });
    }
    
    setShowMoreMenu(!showMoreMenu);
    // Close sort menu if it's open
    setShowSortMenu(false);
  };

  // Dialog Configuration for ReusableDialog
  const paperStyle = {
    maxWidth: { xs: '380px', md: '532px !important' }, 
    minHeight: { xs: '0px !important', md: '400px !important' },
  }

  const titleStyle = {
    fontSize: { xs: '24px', md: '28px' },
    paddingLeft: { xs: '29px !important', md:'33px !important' },
    lineHeight: { xs: 1.3, md: 1.3 },
    '& .MuiTypography-subtitle1': {
      width: { xs: '280px', md: '303px' },
      fontSize: { xs: '12px', md: '14px' },
      lineHeight: { xs: 1.3, md: 1.4 },
      marginTop: { xs: '4px', md: '6px' },
      marginBottom: 0,
    }
  }
  
  const contentStyle = {
    minwidth: { xs:'320px', md:'532px !important' }, // Set exact width you want
    minHeight: {xs:'270px', md:'250px !important'}, // Set exact height you want
    maxHeight: {xs:'270px', md:'250px !important'},
  }
  
  const buttonStyle = {
    minWidth: { xs: '320px', md: '458px' },
    marginLeft: { xs: '24px', md: '20px' },
    marginRight: { xs: '24px', md: '20px' },
    marginBottom: { xs: '20px', md: '15px' },
    minHeight: '52px',
  }
  
  const ScheduleDialogContent = (
    <Box sx={{
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      marginTop: '-5px',
      //  control width responsively!
      maxWidth: { xs: '320px', md: '458px' },
      minWidth: { xs: '280px', md: '458px' },
      // Control padding and margin freely
      padding: { xs: '0px', md: '0px' },
      margin: { xs: '0px auto 0px auto', md: '0px 10px 0px 10px' }, // Center on mobile
    }}>
      {/* Wallet Address Field */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        width: '100%' // Ensure it takes full container width
      }}>
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
          sx={{
            width: '100%', // Use xs instead of style
            '& .MuiOutlinedInput-root': {
              height: { xs: '44px', md: '48px' },
              fontSize: { xs: '14px', md: '16px' }
            }
          }}
        />
      </Box>

      {/* Date and Time Row */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: {xs: 'column', md: 'row'},
        width: '100%',
        gap: { xs: '16px', md: '24px' } // Responsive gap
      }}>
        {/* Date Field */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          width: { xs: '100%', md: '50%' }, // Slightly less on mobile for better fit
          minWidth: '120px'
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
            sx={{
              width: '100%', // Use sx instead of style
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
        </Box>

        {/* Time Field */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          width: { xs: '100%', md: '50%' },
          minWidth: '120px'
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
            sx={{
              width: '100%', // Use sx instead of style
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
        </Box>
      </Box>
    </Box>
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
<div className=' flex flex-row w-[104px] h-[40px] md:w-[182px] md:h-[48px] px-[8px] md:px-[45px]
py-[8px] md:py-[12px] rounded-[8px] md:mt-10 mt-5 ml-[18.5rem] md:ml-0 border border-[#D9D9D9]
 cursor-pointer' 
 onClick={(e) => {
   const rect = e.currentTarget.getBoundingClientRect();
   const isMobile = window.innerWidth < 768; // md breakpoint
   
   if (isMobile) {
     // Mobile positioning - position relative to button
     setSortMenuPosition({
       x: rect.left - 50, // Adjust left offset for mobile
       y: rect.bottom + 5
     });
   } else {
     // Desktop positioning - your current logic
     setSortMenuPosition({
       x: rect.left,
       y: rect.bottom + 5
     });
   }
   
   setShowSortMenu(!showSortMenu);
   setShowMoreMenu(false);
 }}>
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
              className='absolute left-[22rem] top-0 cursor-pointer'
              onClick={(e) => handleMoreClick(e, true)}
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
              onClick={(e) => handleMoreClick(e, false)}
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
        paperStyle={paperStyle}
      >
        {ScheduleDialogContent}
      </ReusableDialog>

<CustomDialog
  open={removeDialogOpen}
  onClose={() => setRemoveDialogOpen(false)}
  title="Are You Sure?"
  actions={
    <Button
      sx={{
        backgroundColor: '#63D9B9',
        color: 'black',
        width: '158px',
        height: '52px',
        borderRadius: '8px',
        marginBottom: '15px',
        marginRight: { xs: '0px', md: '20px' }, // Remove right margin on mobile
        margin: { xs: '0 auto 15px auto', md: '0 20px 15px 0' }, // Center on mobile
      }}
      onClick={() => {
        setRemoveDialogOpen(false);
        setConfirmRemoveDialogOpen(true);
      }}
    >
      Remove
    </Button>
  }
>
  <Typography sx={{ 
    color: 'white', 
    fontSize: '16px' ,
    width: { xs: '340px', md: '473px' }, // Responsive width
    marginLeft: { xs: '20px', md: '20px' },
    marginTop: { xs: '-15px', md: '0px' }, // Adjust top margin for better alignment
    padding: { xs: '0px', md: '0px' }, // Add padding on mobile
    maxWidth: { xs: '320px', md: 'none' }, // Prevent overflow on mobile
  }}>
    Are you sure you want to remove Ella Roberts? 
    They will be remove from your PayCheck members?
  </Typography>
</CustomDialog>

{/* Second Dialog - Confirmation */}
<CustomDialog
  open={confirmRemoveDialogOpen}
  onClose={() => setConfirmRemoveDialogOpen(false)}
  title="Are You Sure?"
  actions={
    <Button
      sx={{
        backgroundColor: '#63D9B9',
        color: 'black',
        width: '158px',
        height: '52px',
        borderRadius: '8px',
        marginBottom: '15px',
        margin: { xs: '0 auto 15px auto', md: '0 20px 15px 0' },
      }}
      onClick={() => {
        setConfirmRemoveDialogOpen(false);
      }}
    >
      Cancel
    </Button>
  }
>
  <Typography sx={{ 
    color: 'white', 
    fontSize:  '16px',
    width: { xs: '330px', md: '505px' },
    maxWidth: { xs: '340px', md: 'none' },
    marginLeft: { xs: '20px', md: '20px' },
    marginTop: { xs: '-20px', md: '-15px' },
    padding: { xs: '0px', md: '0' },
   
  }}>
    Are you sure you want to cancel salary scheduled for Ella Roberts? They will not be
    able to get their scheduled anymore 
  </Typography>
</CustomDialog>

      {/* Custom More Options Popup Menu */}
      {showMoreMenu && (
  <div 
    className="fixed z-50 bg-[#282828] rounded-[8px] w-[230px] h-[180px]"
    style={{
      left: `${moreMenuPosition.x}px`,
      top: `${moreMenuPosition.y}px`,
    }}
  >
    <div className="py-8 ml-5">
      <button 
        className="px-4 py-2 text-white cursor-pointer hover:bg-[#404040] text-sm"
        onClick={() => {
          console.log('REMOVE CLICKED DIRECTLY');
          setRemoveDialogOpen(true);
          setShowMoreMenu(false);
        }}
      >
        Remove Member
      </button>
      <button 
        className="px-4 py-2 text-white cursor-pointer hover:bg-[#404040] text-sm"
        onClick={() => {
          console.log('View Details clicked');
          setShowMoreMenu(false);
        }}
      >
        Cancel Payment
      </button>
      <Link href="/schedule/profile" >
     <button 
  className="px-4 py-2 text-white cursor-pointer hover:bg-[#404040] text-sm"
>
  Profile
</button>
</Link>
    </div>
    <Image
      src="/Images/cancel icon.svg"
      alt="Close"
      width={24}
      height={24}
      className="absolute top-2 right-4 cursor-pointer"
      onClick={() => setShowMoreMenu(false)}
    />
  </div>
)}
      <SortPopupMenu />
    </DashboardLayout>
  )
}

export default Schedule