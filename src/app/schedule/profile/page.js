'use client'
import React, { useState } from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import ReusableDialog, { StyledTextField } from '../../Components/ReusableDialog'
import { Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'


const Profile = () => {
     const [open, setOpen] = useState(false)

      const [formData, setFormData] = useState({
         fullName: '',
         email: '',
         walletAddress: '',
         position: '',
         salary: ''
       })

        const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

   const handleSubmit = () => {
    handleClose()
   }

    const handleFinalSubmit = () => {
    console.log('Adding member:', formData)
    }

    
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  
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
    maxWidth: { xs: '100%', md: 'none' },
    minHeight: { xs: 'auto', md: '344px' },
    maxHeight: { xs: '90vh', md: 'none' },
    padding: { xs: '8px', md: '0 5px'  },
    
  },
  buttonStyle: {
    minWidth: { xs: 'calc(100% - 32px)', md: '470px' },
    maxWidth: { xs: '100%', md: '470px' },
    minHeight: '48px',
    margin: { xs: '0 16px 16px 16px', md: '0 15px auto 15px' },
    marginBottom: { xs: '16px', md: '20px' },
    display: 'block',
    width: { xs: 'auto', md: 'auto' },
  }, 
   paperStyle: {
    minWidth: { xs: '280px', md: '532px' }, // Change this to your desired width
    maxwidth: { xs: '100%',  md: '532px' }, // Change this to your desired width
    minHeight: { xs: 'auto', md: '532px' }, // Change this to your desired height
    maxHeight: { xs: '90vh', md: '632px' }, // Optional: set max height
     '& .MuiIconButton-root[aria-label="close"]': {
    display: 'none !important'
  }
}

}


// Also update your FirstDialogContent with better mobile styling
const FirstDialogContent = (
  <div style={{
    display:'flex', 
    flexDirection:'column', 
    gap:'16px',
    marginTop:'-10px', 
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

    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <Typography sx={{ 
        color: '#B6B6B6', 
        fontSize: { xs: '11px', md: '12px' }
      }}>
        Salary
      </Typography>
      <StyledTextField
        type="text"
        value={formData.salary}
        onChange={(e) => handleInputChange('salary', e.target.value)}
        placeholder="$100"
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



  return (
    <DashboardLayout>
       <section className='flex flex-col md:flex-wrap 2xl:mx-auto relative 
        pb-[4rem] md:pb-0 w-full h-full md:h-[1000px]'>
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
      {/* Back Button */}
      <Link href="/schedule" className='mt-10 w-max h-max'>
      <button 
        className="flex items-center gap-2 cursor-pointer text-white text-[16px] md:text-[36px]"
      >
        <Image
          src="/Images/arrow-left.svg"
          alt="Back Arrow"
          width={36}
          height={36}
          className='w-[20px] md:w-[36px] h-[20px] md:h-[36px] mx-[1rem] md:mx-0 mt-[-15px] md:mt-0'
        />
         <span className='hidden md:flex'>Ella Roberts Profile</span>
      </button>
      </Link>
      
      {/* Profile Content */}
      <div className='flex flex-col md:w-[327px] md:h-[96px] md:gap-2 mt-7 md:mt-10 text-white mx-[4rem] md:mx-0'>
      <h2 className="text-[24px] md:text-[40px]">Ella Roberts</h2>
      <span className='text-[16px]'>Ellaroberts34@gmail.com</span>
      </div>
     
        <div className="space-y-6 mt-8 md:mt-18 w-[320px] md:min-w-[401px] text-white mx-[4rem] md:mx-0">
          <div className='flex flex-row text-[16px] md:text-lg'>
            <label>Wallet Address</label>
            <p className="text-white ml-[2.5rem] md:ml-[5.8rem]">Asd87484jfjffjk</p>
          </div>
          
         <div className='flex flex-row text-[16px] md:text-lg'>
            <label>Position</label>
            <p className="text-white ml-[5.7rem] md:ml-[9.4rem]">UI Engineer</p>
          </div>
          
          <div className='flex flex-row text-[16px] md:text-lg'>
            <label>Salary</label>
            <p className="text-white ml-[6.6rem] md:ml-[10.3rem]">$800</p>
          </div>
          
          <div className='flex flex-row text-[16px] md:text-lg'>
            <label>Date Scheduled</label>
            <p className="text-white ml-[2rem] md:ml-[5rem]">16th December 2023</p>
          </div>

           <div className='flex flex-row text-[16px] md:text-lg'>
            <label>Time Scheduled</label>
            <p className="text-white ml-[2rem] md:ml-[5rem]">02:00 pm</p>
          </div>
        </div>
        {/* button */}
<div 
  className='w-[196px] md:w-[182px] h-[52px] mx-auto md:mx-0 rounded-[8px] gap-[10px] mt-10 md:mt-6
  py-[14px] px-[25px] md:px-[28px] text-black text-center font-semibold bg-[#63D9B9] cursor-pointer'
  onClick={handleOpen} // Add this line
>
  <span>Edit Profile</span>
</div>
    </section>
    
        {/* First Dialog - Personal Information */}
        <ReusableDialog
          open={open}
          onClose={handleClose}
          title="Edit Profile"
          subtitle="Members profile will be updated"
          buttonText="Update Profile"
          onSubmit={handleSubmit}
          titleStyle={dialogConfig.titleStyle}
          contentStyle={dialogConfig.contentStyle}
          buttonStyle={dialogConfig.buttonStyle}
          paperStyle={dialogConfig.paperStyle}
         
        >
          {FirstDialogContent}
        </ReusableDialog>
    </DashboardLayout>
  )
}

export default Profile