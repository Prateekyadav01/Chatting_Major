import React from 'react'
import { Link } from '../styles/StyledComponent'
import { Stack, Typography } from '@mui/material'

const ChatItem = (
    avatar =[],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChatOpen,
) => {
  return (
   <Link to={`/chat/${_id}`}>
    <div style={{
        display: "flex",
        gap:"1rem",
        padding:"1rem",
        alignItems: "center",
        backgroundColor: sameSender ? "black" : "uset",
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

        {/* {
            isOnline && <Box sx
        } */}
    </div>
   </Link>
  )
}

export default ChatItem
