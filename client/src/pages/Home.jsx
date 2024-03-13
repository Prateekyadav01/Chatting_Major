import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box>
        <Typography p={"2rem"} variant='h4' textAlign={"center"} >
          Some message text
        </Typography>
    </Box>
  )
}

export default AppLayout()(Home);
