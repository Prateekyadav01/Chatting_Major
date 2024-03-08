import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { orange } from '../constants/color'
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon
}
  from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
import Iconbtn from '../constants/Iconbtn'


const Header = () => {

  const [isMobile, setIsMobile] =useState(false);
  const [isNewGroups, setIsNewGroups] =useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNotifications ,setIsNotifications] = useState(false);


  const navigate = useNavigate();
  const handleMobile = () => {
    console.log('mobile')
    setIsMobile(prev=!prev);
  }

  const openSearchDialog = () => {
    console.log('search')
    setIsSearch(prev=!prev);
  }
  const openNewGroup = () => {
    console.log('new group')
    setIsNewGroups(prev=!prev);
  }
  const navigateToGroup = () => {
    navigate('/groups')
  }
  const handleLogout = () => {  
    console.log('logout')
  }
  const handleNotifications = () => { 
    console.log('notifications')
    setIsNotifications(prev=!prev);
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
              <Iconbtn title={"Notifications"}
                onClick={handleNotifications}
                icon={<NotificationsIcon/>}
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


