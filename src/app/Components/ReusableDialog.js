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

// Styled Components
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    borderTop: 'none ',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    backgroundColor: '#1a1a1a',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },  
  '& .MuiPaper-root': {
    backgroundColor: '#282828',
    borderRadius: '8px',
    border: '1px solid #282828',               
    minWidth: '532px',            
    maxHeight: '514px',           
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px',
      minHeight: 'auto',
      margin: '16px',
      width: 'calc(100% - 32px)',
      maxWidth: '400px',
    },
  },
  '& .MuiDialogTitle-root': {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    borderBottom: 'none !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      padding: theme.spacing(2),
    },
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
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    height: '48px', // Set fixed height
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
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    '&.Mui-focused': {
      color: '#63D9B9',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#ffffff',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    padding: '8px 12px', // Reduce padding
    fontSize: '14px', // Optional: smaller font size
  },
})

const StyledButton = styled(Button)({
  backgroundColor: '#63D9B9',
  color: 'black',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  '&:hover': {
    backgroundColor: '#52c7a5',
  },
})

// Reusable Dialog Component
const ReusableDialog = ({ 
  open, 
  onClose, 
  title, 
  subtitle, 
  children, 
  buttonText, 
  onSubmit,
  buttonProps = {},
  titleStyle = {},
  contentStyle = {},   
  buttonStyle = {},   
  paperStyle = {},
  customTitleComponent = null,
}) => {
  return (
    <BootstrapDialog
      onClose={onClose}
      open={open}
      maxWidth="sm"
       sx={{
        '& .MuiPaper-root': {
          ...paperStyle // This will override the default styles
        }
      }}
    >
      <DialogTitle sx={{ pl: 5, ...titleStyle }}>
        {customTitleComponent ? (
          customTitleComponent
        ) : (
          <>
            {title}
            {subtitle && (
              <Typography variant="subtitle1" sx={{ 
                color: '#B6B6B6', 
                width: '300px', 
                fontWeight: 400, 
               
              }}>
                {subtitle}
              </Typography>
            )}
          </>
        )}
      </DialogTitle>
      
      <IconButton
        aria-label="close"
        onClick={onClose}
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
      
      <DialogContent sx={contentStyle}>
        {children}
      </DialogContent>
      
      <DialogActions>
        <StyledButton 
          onClick={onSubmit}
          sx={{ 
            // Default button styles
            minWidth: { xs: '350px', sm: '458px' },
            maxWidth: { xs: '350px', sm: 'none' },
            minHeight: '52px',
            border: '8px',
            margin: { xs: '0 auto 16px auto', sm: 'auto' },
            marginBottom: { xs: '16px', sm: '10px' },
            width: { xs: 'auto', sm: 'auto' },
            display: 'block',
            // Apply custom buttonStyle (this will override defaults)
            ...buttonStyle,
            // Apply buttonProps last (highest priority)
            ...buttonProps
          }}
        >
          {buttonText}
        </StyledButton>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default ReusableDialog
export { StyledTextField, StyledButton }