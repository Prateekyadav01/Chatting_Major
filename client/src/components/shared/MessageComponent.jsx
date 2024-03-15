import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React, { memo } from 'react'

const MessageComponent = ({message , user}) => {
    const {sender,content, attachments=[],createdAt} = message;

    const senderId = sender?.id === user?.id ;
    const timeAgo = moment(createdAt).fromNow();
  return (
    <div style={{
        alignSelf: senderId ? "flex-end" : "flex-start",
        backgroundColor:"white",
        color:"black",
        padding:"0.5rem",
        width:"fit-content",
        borderRadius:"5px"
    }}>
      
      {!senderId && <Typography>
          {sender.name}
        </Typography>}





      {attachments.length>0 &&
      attachments.map((attachment, index) => {
        const url = attachment.url;
        const file ="asd";

        return (
            <Box key={index}>
                <a href={url} target="_blank" download style={{
                    color: "black",
                }}>
                    
                </a>
            </Box>
        )
      })}

      <Typography variant='caption' color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  )
}

export default memo(MessageComponent)
