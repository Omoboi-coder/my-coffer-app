import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button, Menu, MenuItem } from '@mui/material';
import { px } from 'framer-motion';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#282828 !important',
    borderRadius: '2px',
    marginTop: theme.spacing(1),
    minWidth: '50px',
    color: 'rgb(55, 65, 81)',
    '& .MuiMenu-list': {
      padding: '0px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles('dark', {
          color: 'inherit',
        }),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

const DropDownMenu = ({ 
  buttonText = "Options", 
  menuItems = [], 
  variant = "contained",
  disableElevation = true,
  ...buttonProps 
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant={variant}
        disableElevation={disableElevation}
        onClick={handleClick}
        {...buttonProps}
      >
        {buttonText}
      </Button>
      <StyledMenu
        slotProps={{
          list: {
            'aria-labelledby': 'customized-button',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem 
            key={index}
            onClick={() => handleItemClick(item)} 
            disableRipple
          >
            {item.icon && item.icon}
            {item.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default DropDownMenu;