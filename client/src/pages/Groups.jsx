import { Backdrop, Box, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { grayColor, orange } from '../components/constants/color'
import { Backpack as BackpackIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Groups = () => {

  const chatId = "aa";
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateBack = () => {
    navigate("/");
  }

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => prev);
  }

  const handleMbobileClose = () => {
    setIsMobileMenuOpen(false);
  }

  const IconBtn = (
    <>
        <Box
        sx={{
          display:{
            
          }
        }}
        >

        </Box>
    </>
  )

return (
  <Grid container height={"100vh"}>
    <Grid item sm={4}
      sx={{
        display: { xs: "none", sm: "block" },
        backgroundColor: orange
      }}
    >
      GroupList
    </Grid>


    <Grid item sm={8}>
      <IconButton>
        <BackpackIcon />
      </IconButton>
    </Grid>
  </Grid>
)
}

export default Groups
