import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material'
import { useInputValidation } from '6pp'


const users =['1', '2','3','4'];
const Search = () => {

  const search = useInputValidation("");

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
        users.map((user) =>(
          <ListItem >
            <ListItemText  />
          </ListItem>
        ))
      }
    </List>

    </Stack>
  </Dialog>
}

export default Search
