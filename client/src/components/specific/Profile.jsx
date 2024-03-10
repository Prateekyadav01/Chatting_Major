import { Avatar, Stack } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "5px solid white",
            marginBottom:"1rem",
            objectFit:"contain"
        }}
        />
        <ProfileCard/>
    </Stack>
  )
}


const ProfileCard = ()=> <div>ProfileCaerd</div>

export default Profile
