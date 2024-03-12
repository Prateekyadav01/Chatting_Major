import React, { memo, useState } from 'react'
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../constants/sampleData'
import { useInputValidation } from '6pp'

const NewGroup = () => {

  const group = useInputValidation();

  const [members , setMembers] = useState(sampleUsers);
  const [selectedMembers , setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers( (prev) =>
    prev.includes(id) ? prev.filter((i)=> i!==id) : [...prev , id] 
    )
  };
  console.log(selectedMembers);

  const submitHandler = () => {
    console.log("submitHandler")
  }
  return (
    <Dialog open>
      <Stack p={{
        xs: "1rem",
        ssm: "3rem"
      }}
        spacing={"2rem"}
        width={"25rem"}>


        <DialogTitle textAlign={"center"}
          variant='h4'
        >New Group
        </DialogTitle>

        <TextField value={group.value} onChange={group.changeHandler} />

        <Typography variant='body1' >Members</Typography>
        <Stack>
          {
            sampleUsers.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handle={selectMemberHandler}
                isAdded ={selectedMembers.includes(i._id)}
              />
            ))
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant='text' color='error'>Cancel</Button>
          <Button variant='contained' onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
