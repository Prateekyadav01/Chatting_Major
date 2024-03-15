import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { grayColor, orange } from '../components/constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputItem } from '../components/styles/StyledComponent';
import { sampleMessages } from '../components/constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {
  const containerRef = useRef();

  const user = 
    {
      id: "ss",
      name: 'Prateek Yadav'
    }

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
        {
          sampleMessages.map((message) => (
            <MessageComponent message={message} user={user} />
          ))
        }
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
            left: "1.5rem",

          }}>
            <AttachFileIcon />
          </IconButton>
          <InputItem placeholder='Type message here...' />
          <IconButton type='submit' sx={{
            rotate: "-30deg",
            bgcolor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "error.dark",
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>


    </>
  )
}

export default AppLayout()(Chat);
