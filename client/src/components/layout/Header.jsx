import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../constants/color'
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material"

const Header = () => {

  const handleMobile = () => {
    console.log('mobile')
  }

  const openSearchDialog = () => { 
    console.log('search')
  }
  const openNewGroup= ()=>{
    console.log('new group')
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
              <Tooltip title="Search">
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={openSearchDialog}
              >
                <SearchIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="New Group">
              <IconButton
               color='inherit'
               size='large'
               onClick={openNewGroup}
               >
                <AddIcon />
               </IconButton>
              </Tooltip>

            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
