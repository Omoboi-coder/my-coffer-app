import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// Styled dialog component
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#282828',
    borderRadius: '8px',
    border: '1px solid #282828',               
    minWidth: '300px',            // Adjusted for mobile               
    minHeight: '400px',           // Adjusted for mobile
    margin: '16px',               // Add margin for mobile
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',  // Use your Space Grotesk variable
  },
  '& .MuiDialogTitle-root': {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontSize: '20px',             // Slightly smaller for mobile
    fontWeight: 600,
    borderBottom: 'none !important',        // Force remove bottom border from title
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',  // Use your Space Grotesk variable
    '&::after': {
      display: 'none',           // Remove any pseudo-element dividers
    },
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    borderTop: 'none !important',           // Force remove top border
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',  // Use your Space Grotesk variable
    '&::before': {
      display: 'none',           // Remove any pseudo-element dividers
    },
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    backgroundColor: '#1a1a1a',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',  // Use your Space Grotesk variable
  },
  // Target the divider specifically
  '& hr': {
    display: 'none !important',
  },
  '& .MuiDivider-root': {
    display: 'none !important',
  },
  // Apply font to all Typography components within dialog
  '& .MuiTypography-root': {
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },
  // Apply font to input fields
  '& .MuiInputBase-root': {
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },
}))

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#404040',
    },
    '&:hover fieldset': {
      borderColor: '#63D9B9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#63D9B9',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#B6B6B6',
    '&.Mui-focused': {
      color: '#63D9B9',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#ffffff',
  },
})

const StyledButton = styled(Button)({
  backgroundColor: '#63D9B9',
  color: '#ffffff',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#52c7a5',
  },
})

const Mobile = () => {
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
    // Handle the fund account logic here
    console.log('Funding account with:', { fundAmount })
    // You can add your API call or funding logic here
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

  return (
    <div className='flex flex-col md:hidden relative pb-20'>
              {/* div 1 - Horizontally Scrollable */}
              <div className='mt-5 mx-6'>
                <div className='flex flex-row w-full gap-[8px] overflow-x-auto'>
                  {/* image 1 */}
                  <div className='flex w-[200px] h-[128px] relative rounded-[8px] flex-shrink-0
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
                  <div className='flex flex-col w-[160px] h-[128px] rounded-[16px] bg-[#4A4A4A] flex-shrink-0'>
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
                          <p className='text-[10px] text-white/80 mt-0.5'>For November</p>
                          <p className='text-[12px]'>$9800</p>
                          </div>
                        </div>
                    </div>
                  </div>
                  {/* image 3 */}
                  <div className='flex flex-col w-[160px] h-[128px] rounded-[16px] bg-white flex-shrink-0'>
                    <div className='flex flex-col w-[147px] h-[86px] ml-2 mt-6'>
                       <Image
                        src="/Images/calendar-2 (2).svg"
                        alt=''
                        width={16}
                        height={16}
                        className='mx-auto'
                        />
                        <div className='w-[146px] h-[100px] mt-5 text-center text-black space-y-2'>
                          <p className='text-[16px]'>Scheduled</p>
                           <div className='flex flex-row mx-auto gap-[7px]'>
                          <p className='text-[10px] mt-0.5'>Outgoing Payments</p>
                          <p className='text-[12px]'>$7490</p>
                          </div>
                        </div>
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
              <div className='flex flex-row max-w-[382px] h-[24px] justify-between mt-5 mx-6'>
                <h3 className='text-[16px] text-white'>Recent Activities</h3>
                <h5 className='text-[12px] text-[#63D9B9] opacity-70 mt-1'>View all</h5>
    
              </div>
              {/* div 4 */}
              <div className='flex flex-col max-w-[382px] h-[220px] gap-[10px] mt-5 mx-6'>
                {/* item 1 */}
                <div className='flex flex-row rounded-[8px] py-2 min-[430px]:gap-16 min-[414px]:gap-14 min-[390px]:gap-12 bg-[#282828]'>
                  <div className='flex flex-col max-w-[180px] h-[52px] space-y-1'>
                    <p className='ml-3 text-white opacity-80'>11:26 am</p>
                    <div className=' flex flex-row ml-3 gap-2 text-[16px] text-white'>
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
                <div className='flex flex-row rounded-[8px] py-2 min-[430px]:gap-16 min-[414px]:gap-14 min-[390px]:gap-12 bg-[#282828]'>
                  <div className='flex flex-col max-w-[180px] h-[52px] space-y-1'>
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
                <div className='flex flex-row rounded-[8px] py-2 min-[430px]:gap-16 min-[414px]:gap-14 min-[390px]:gap-12 bg-[#282828]'>
                  <div className='flex flex-col max-w-[180px] h-[52px] space-y-1'>
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
                {/* div 5 - Updated with click handlers */}
                        {/* item 1 - Fund Account (clickable) */}
                    <div className='flex flex-row max-w-[482px] h-[56px] mt-8 mx-6.5 gap-3'>
                        <div 
                          className='flex max-w-[180px] min-[430px]:w-[210px] h-[56px] rounded-[8px] p-[12px] border 
                          text-white border-[#244E43] bg-[#0D0D0D] cursor-pointer hover:bg-[#1a1a1a] 
                          transition-colors duration-200'
                          onClick={handleClickOpen}
                        >
                          <div className='flex flex-row w-[150px] h-[32px] gap-1.5 mx-auto'>
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
                         {/* item 2 - Withdraw Fund (clickable) */}
                        <div 
                          className='flex flex-row max-w-[180px] min-[430px]:w-[210px] h-[56px] rounded-[8px] p-[11px] border 
                          text-white border-[#244E43] bg-[#0D0D0D] cursor-pointer hover:bg-[#1a1a1a] 
                          transition-colors duration-200'
                          onClick={handleWithdrawOpen}
                        >
                          <div className='flex flex-row w-[180px] h-[32px] gap-1.5 mt-1 mx-auto'>
                             <Image
                              src="/Images/mobile credit card and money (1).svg"
                              alt=''
                              width={34}
                              height={24}
                              className=''
                              />
                            <h2 className='text-[16px] mt-1'>Withdraw Fund</h2>
                          </div>
                        </div>
                    </div>
                    <div className='max-w-[382px] h-[100px] rounded-[8px] mt-6 mx-6 mb-6'>
                      <Image
                        src="/Images/Withdraw Fund (1).svg"
                        alt=''
                        width={382}
                        height={100}
                        className='w-full h-full object-contain'
                        />    
                    </div>           

        {/* Fund Account Dialog */}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="fund-account-dialog-title"
          open={open}
          maxWidth="sm"
          fullWidth
        >
         <DialogTitle sx={{ m: 0, p: 0 }} id="fund-account-dialog-title">
          <div style={{
            width: '100%',           
            height: '85px',          
            padding: '16px',       
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
            
            {/* Main Title */}
            <Typography sx={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '8px',
            }}>
              Fund Your Account
            </Typography>
            
            {/* Subtitle */}
            <Typography sx={{
              fontSize: '12px',
              color: '#ffffff',
              lineHeight: 1.4,
            }}>
              Amount funded into your account will be added directly from connected wallet
            </Typography>
            
          </div>
        </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#B6B6B6',
              '&:hover': {
                backgroundColor: '#2a2a2a',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              
              <div style={{width:'100%', height:'70px', gap: '8px', textAlign: 'center', marginTop: '20px'  }}>
                <Typography  sx={{ color: '#ffffff', fontSize: '12px' }}>
               Enter amount to add to your account     
              </Typography>
               <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', justifyContent: 'center', marginTop: '8px' }}>
              <Typography  sx={{ color: '#ffffff', fontSize: '24px', marginTop:'8px' }}>
               $ 
              </Typography>
              <Typography sx={{ color: '#ffffff', fontSize: '36px' }}>
               0.00
              </Typography>
              </div>
              </div>
             <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', width:'100%',
               marginTop:'60px', justifyContent:'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>
               Wallet Address: Asdhj6823hdjhdj
              </Typography>
              <Image
               src='/Images/copy.svg'
                alt='copy address image'
               width='20'
               height='20'
               />
             </div>
            </div>
          </DialogContent>
          
          <DialogActions>
            <StyledButton 
              onClick={handleFundAccount}
              sx={{
                width: '100%',
                minHeight:'52px',
                margin:'0 16px 16px 16px'
              }}
            >
              Fund Account
            </StyledButton>
          </DialogActions>
        </BootstrapDialog>

        {/* Withdraw Fund Dialog */}
        <BootstrapDialog
          onClose={handleWithdrawClose}
          aria-labelledby="withdraw-dialog-title"
          open={withdrawOpen}
          maxWidth="sm"
        >
          <DialogTitle sx={{ m: 0, p: 0 }} id="withdraw-dialog-title">
            <div style={{
              width: '100%',           
              height: '85px',          
              padding: '16px',       
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
              
              {/* Main Title */}
              <Typography sx={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px',
              }}>
                Withdraw Funds
              </Typography>
              
              {/* Subtitle */}
              <Typography sx={{
                fontSize: '12px',
                color: '#ffffff',
                lineHeight: 1.4,
                width: '280px',
              }}>
                Employee salaries will be sent out on the scheduled date and time
              </Typography>
              
            </div>
          </DialogTitle>
          
          <IconButton
            aria-label="close"
            onClick={handleWithdrawClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#B6B6B6',
              '&:hover': { backgroundColor: '#2a2a2a' },
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <DialogContent>
            <div style={{ display: 'flex', flexDirection: 'column', width:'100%', gap: '24px', marginTop:'25px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>
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
                <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>
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
          </DialogContent>
          
          <DialogActions>
            <StyledButton 
              onClick={handleWithdraw}
              sx={{ 
                width: '100%',
                minHeight:'52px',
                margin:'0 16px 16px 16px',
                backgroundColor: '#63D9B9',
                '&:hover': { backgroundColor: '#52c7a5' }
              }}
            >
              Withdraw Funds
            </StyledButton>
          </DialogActions>
        </BootstrapDialog>

    </div>
  )
}

export default Mobile