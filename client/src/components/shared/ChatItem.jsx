import React, { memo } from 'react'
import { Link } from '../styles/StyledComponent'
import { Box, Stack, Typography } from '@mui/material'

const ChatItem = (
    {
        avatar =[],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChatOpen,
    }
) => {
  return (
   <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChatOpen(e,_id,
   groupChat)}>
    <div style={{
        display: "flex",
        gap:"1rem",
        padding:"1rem",
        alignItems: "center",
        backgroundColor: sameSender ? "black" : "unset",
        color: sameSender? "white" : "unset",
        position: "relative",
    }}>
        <Stack>
            <Typography>{name}</Typography>
            {
                newMessageAlert && (
                    <Typography>
                        {newMessageAlert.count} New messages
                    </Typography>
                )
            }

        </Stack>

        {
           isOnline && (
            <Box 
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                top: "50%",
                right: "1rem",
                transform: "translateY(-50%)",
              }}
              />
           )
        }
    </div>
   </Link>
  )
}

export default memo(ChatItem);
