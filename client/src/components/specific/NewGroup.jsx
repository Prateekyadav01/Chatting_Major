import React, { memo } from 'react'
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../constants/sampleData'

const NewGroup = () => {
  const selectMemberHandler =()=>{
    console.log("selectMemberHandler")
  }
  return (
    <Dialog open>
    <Stack p={{
      xs:"1rem",
      ssm:"3rem"
    }}
    spacing={"2rem"}
    maxWidth={"25rem"}>
      <DialogTitle textAlign={"center"}
      variant='h4'
      >New Group
      </DialogTitle>

      <TextField/>

      <Typography>Members</Typography>
    <Stack>
    {
      sampleUsers.map((i) => (
        <UserItem 
        user={i} 
        key={i._id} 
        handle={selectMemberHandler} 
      
         />
      ))
     }
    </Stack>

    <Stack>
      <Button variant='text' color='error'>Cancel</Button>
      <Button variant='contained'>Create</Button>
    </Stack>
    </Stack>
  </Dialog>
  )
}

export default NewGroup
