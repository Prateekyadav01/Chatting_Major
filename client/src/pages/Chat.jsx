import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { grayColor } from '../components/constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';

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
    <Stack>
        <IconButton>
          <AttachFileIcon/>
        </IconButton>

        <IconButton>
          <SendIcon/>
        </IconButton>
      </Stack>
    </>
  )
}

export default AppLayout()(Chat);
