import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { grayColor } from '../components/constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';
import { InputItem } from '../components/styles/StyledComponent';

const Chat = () => {
  const containerRef = useRef();
  return (
    <>
    <Stack ref={containerRef}
    height={"80vh"}
    spacing={"1rem"}
    padding={"1rem"}
    boxShadow={"border-box"}
    bgcolor={grayColor}
    sx={{
      overflowX: "hidden",
      overflowY: "auto",
      
    }}
    >
      
    </Stack>
    <Stack direction={"row"} height={"12%"} 
    alignItems={"center"}
    padding={"1rem"}
    sx={{
      position: "relative",
    }}>
        <IconButton sx={{
          position: "absolute",
          left:"1rem",
          size:"small",
          bgcolor: "rgba(0,0,0,0.5)",
          ":hover": {
        }}}>
          <AttachFileIcon/>
        </IconButton>
        <InputItem/>
        <IconButton bgcolor={grayColor} sx={{
          marginRight: 5,
          marginLeft:2,
          
          // position: "absolute",
          // right:"0",
          size:"small",
        }}>
          <SendIcon/>
        </IconButton>
      </Stack>
    </>
  )
}

export default AppLayout()(Chat);
