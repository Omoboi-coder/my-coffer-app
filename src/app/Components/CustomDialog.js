"use client"
import React from 'react'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    borderTop: 'none !important',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    backgroundColor: '#1a1a1a',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },  
  '& .MuiPaper-root': {
    backgroundColor: '#282828',
    borderRadius: '8px',
    border: '1px solid #282828',               
    minWidth: '532px',            
    minHeight: '514px',           
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },
  '& .MuiDialogTitle-root': {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    borderBottom: 'none !important',
  },
  '& hr': {
    display: 'none !important',
  },
  '& .MuiDivider-root': {
    display: 'none !important',
  },
  '& .MuiTypography-root': {
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },
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
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    '& fieldset': {
      borderColor: '#F1F1F1',
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
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    '&.Mui-focused': {
      color: '#63D9B9',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#ffffff',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },
})

const StyledButton = styled(Button)({
  backgroundColor: '#63D9B9',
  color: '#ffffff',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  '&:hover': {
    backgroundColor: '#52c7a5',
  },
})

// Simple reusable component
const CustomDialog = ({ 
  open, 
  onClose, 
  title, 
  subtitle, 
  children, 
  buttonText = "Submit",
  onSubmit,
  customStyles = {} // Add this prop
}) => {
  
  return (
    <BootstrapDialog
      onClose={onClose}
      open={open}
      maxWidth="sm"
      sx={customStyles} // Apply custom styles
    >
      <DialogTitle sx={{ m: 0, p: 3 }}>
        {title}
        {subtitle && (
          <Typography variant="subtitle1" sx={{ 
            color: '#FEFEFE', 
            width: '300px', 
            fontWeight: 400, 
            mt: 1 
          }}>
            {subtitle}
          </Typography>
        )}
      </DialogTitle>
      
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: '#B6B6B6',
        }}
      >
        <CloseIcon />
      </IconButton>
      
      <DialogContent>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '458px', 
          gap: '24px', 
          margin: '25px auto 0 auto' 
        }}>
          {children}
        </div>
      </DialogContent>
      
      <DialogActions>
        <StyledButton 
          onClick={onSubmit}
          sx={{ 
            minWidth: '458px',
            minHeight: '52px',
            margin: 'auto',
            marginBottom: '25px',
          }}
        >
          {buttonText}
        </StyledButton>
      </DialogActions>
    </BootstrapDialog>
  )
}

export { StyledTextField, StyledButton }
export default CustomDialog