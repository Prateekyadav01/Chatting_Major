import { Dialog, DialogTitle, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import {Search as SearchIcon} from '@mui/icons-material'
import {useInputValidation} from '6pp'
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

    </Stack>
  </Dialog>
}

export default Search
