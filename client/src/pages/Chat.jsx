import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Stack } from '@mui/material';
import { grayColor } from '../components/constants/color';

const Chat = () => {
  const containerRef = useRef();
  return (
    <>
    <Stack ref={containerRef}
    height={"80vh"}
    spacing={"1rem"}
    padding={"1rem"}
    boxShadow={"border-box"}
    bgcolor={"blue"}
    sx={{
      overflowX: "hidden",
      overflowY: "auto",
      
    }}
    >
chat
    </Stack>
    </>
  )
}

export default AppLayout()(Chat);
