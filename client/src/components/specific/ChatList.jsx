import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'


const ChatList = ({ w = "100%", chats = [], chatId, onlineUsers = [], newMessageAlert = [
    {
        chatId: "",
        count: 0,
    },
],
    handleDeleteChat,
}) => {
    return (
        <Stack width={w} direction={"column"}>
            {
                chats?.map((data)=>{
                const {avatar , _id, name,groupChat,members} = data;
                
                    return <ChatItem/>
                })
            }
        </Stack>
    )
}

export default ChatList


