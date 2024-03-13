import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { grayColor, orange } from '../components/constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';
import { InputItem } from '../components/styles/StyledComponent';
import { sampleMessages } from '../components/constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {
  const containerRef = useRef();

  const user=[
    {
      id: 1,
      name: '<NAME>',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
  ]
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
    <form
      style={{
        height: "10%"
      }}
    >
<Stack direction={"row"} height={"100%"} 
    alignItems={"center"}
    padding={"1rem"}
    sx={{
      position: "relative",
    }}>
        <IconButton sx={{
          position: "absolute",
          left:"1.5rem",
         
         }}>
          <AttachFileIcon/>
        </IconButton>
        <InputItem placeholder='Type message here...'/>
        <IconButton type='submit' sx={{
          rotate:"-30deg",
          bgcolor:orange,
          color:"white",
          marginLeft:"1rem",
          padding:"0.5rem",
          "&:hover":{
            bgcolor:"error.dark",
          }
        }}>
          <SendIcon/>
        </IconButton>
      </Stack>
    </form>

    {
      sampleMessages.map((message) =>(
        <MessageComponent message={message} user={user}/>
      ))
    }
    </>
  )
}

export default AppLayout()(Chat);
