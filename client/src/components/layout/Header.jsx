import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../constants/color'
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon
}
  from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
import Iconbtn from '../constants/Iconbtn'


const Header = () => {
  const navigate = useNavigate();
  const handleMobile = () => {
    console.log('mobile')
  }

  const openSearchDialog = () => {
    console.log('search')
  }
  const openNewGroup = () => {
    console.log('new group')
  }
  const navigateToGroup = () => {
    navigate('/groups')
  }
  const handleLogout = () => {  
    console.log('logout')
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position='static'
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant='h6'
              sx={{
                display: { xs: "none", sm: "block" },
              }}>
              Chatting App
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMobile}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            <Box>
              <Iconbtn title={"search"}
                onClick={openSearchDialog}
                icon={<SearchIcon />}
              />

              <Iconbtn title={"New Group"}
                onClick={openNewGroup}
                icon={<AddIcon />}
              />

              <Iconbtn title={"Manage Group"}
                onClick={navigateToGroup}
                icon={<GroupIcon />}
              />

              <Iconbtn title={"Logout"}
                onClick={handleLogout}
                icon={<LogoutIcon />}
              />

            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header


