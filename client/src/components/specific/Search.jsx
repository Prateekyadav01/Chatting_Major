import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Search as SearchIcon } from '@mui/icons-material'
import { useInputValidation } from '6pp'
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../constants/sampleData';



const Search = () => {

  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;

  const [users ,setUsers] = useState(sampleUsers);
  const addFriendHandler= (id) => {
    console.log("addFriendHandler")
  }
  
  return <Dialog open >
    <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
      <DialogTitle textAlign={"center"}>Find People</DialogTitle>
      <TextField label="" value={search.value}
        onChange={search.changeHandler}
        variant='outlined'
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      <List>
        {
          users.map((i) => (
            <UserItem 
            user={i} 
            key={i._id} 
            handle={addFriendHandler} 
            handleIsLoading={isLoadingSendFriendRequest}
             />
          ))
        }
      </List>

    </Stack>
  </Dialog>
}

export default Search
