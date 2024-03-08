import React from 'react'
import {  IconButton,  Tooltip,  } from '@mui/material'



const Iconbtn = ({title , icon , onclick}) => {

    
  return (
    <Tooltip title={title}>
    <IconButton
      color='inherit'
      size='large'
      onClick={onclick}
    >
      {icon}
    </IconButton>
  </Tooltip>
  )
}

export default Iconbtn
