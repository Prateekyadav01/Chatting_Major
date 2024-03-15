import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React, { memo } from 'react';
import { lightBlue } from '../constants/color';

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?.id;
  console.log(sameSender);
  const timeAgo = moment(createdAt).fromNow();
  return (
    <>
      <div
        style={{
          alignSelf: sameSender ? 'flex-end' : 'flex-start',
          backgroundColor: 'white',
          color: 'black',
          padding: '0.5rem',
          width: 'fit-content',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {!sameSender && (
          <Typography sx={{
            color: lightBlue,
            fontWeight: '600',
          }}>
            {sender.name}
          </Typography>
        )}
        {
          content && <Typography variant='captions'>{content}</Typography>
        }




        <Typography variant='caption' color={"text.secondary"}>
          {timeAgo}
        </Typography>


      </div>
    </>
  );
};

export default memo(MessageComponent);
