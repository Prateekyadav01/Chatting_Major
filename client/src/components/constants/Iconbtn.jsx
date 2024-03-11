import React from 'react'
import {  IconButton,  Tooltip,  } from '@mui/material'



const Iconbtn = ({title , icon , onClick}) => {

    
  return (
    <Tooltip title={title}>
    <IconButton
      color='inherit'
      size='large'
      onClick={onClick}
    >
      {icon}
    </IconButton>
  </Tooltip>
  )
}

export default Iconbtn
