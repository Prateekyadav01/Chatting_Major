import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React, { memo } from 'react';

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?.id === user?.id;
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
        }}
      >
        {!sameSender && (
          <Typography>
            {sender.name}
          </Typography>
        )}
        {
          content && <Typography variant='captions'>{content}</Typography>
        }
        {/* {attachments.length > 0 &&
          attachments.map((attachment, index) => {
            const url = attachment.url;
            const file = 'asd';
            // Do something with 'url' and 'file' here
          })} */}
      </div>
    </>
  );
};

export default memo(MessageComponent);
