import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',

  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  },
  '& .MuiPaper-root': {
  // Mobile styles
  [theme.breakpoints.down('md')]: {
    width: '380px',
    maxWidth: '380px', 
    minHeight: '252px',
    margin: '16px',
  },
  // Desktop styles  
  [theme.breakpoints.up('md')]: {
    width: '600px',
    maxWidth: '600px',
    minHeight: '252px',
  },
  backgroundColor: '#282828',
  fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
},
   '& *': {
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif !important',
    fontWeight: '300 !important',
  },
    '& .MuiButton-root': {
    fontWeight: '500 !important', // Make buttons semi-bold
  },
  
}));

const CustomDialog = ({
  open,
  onClose,
  title,
  children,
  actions,
  showCloseIcon = true,
  width = '600px',
  maxWidth = '90vw',
  maxHeight = '254px',
  backgroundColor= '#282828',
  sx = {},
  titleSx = {},
 contentSx = { 
  fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
  fontWeight: '300 !important', 
}, 
  actionsSx = { 
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
    fontWeight: '300 !important',
 }, 
  ...dialogProps
}) => {
  // Custom styling that can be overridden
  const customDialogSx = {
    '& .MuiPaper-root': {
      width,
      maxWidth,
      maxHeight,
      fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
      ...sx,
    },
  };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="reusable-dialog-title"
      open={open}
      sx={customDialogSx}
      {...dialogProps}
    >
      <DialogTitle 
  sx={{ 
    m: 0, 
    p: 2, 
    color:'white', 
    paddingLeft:'35px', 
    pt:2,
    fontSize: '24px',
    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', 
    fontWeight: '300 !important',
    ...titleSx 
  }} 
  id="reusable-dialog-title"
>
  {title}
</DialogTitle>
      
      {showCloseIcon && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 20,
            top: 8,
            color: theme.palette.grey[50],
          })}
        >
          <CloseIcon />
        </IconButton>
      )}
      
      <DialogContent sx={contentSx}>
        {children}
      </DialogContent>
      
      {actions && (
        <DialogActions sx={actionsSx}>
          {actions}
        </DialogActions>
      )}
    </BootstrapDialog>
  );
};

export default CustomDialog;