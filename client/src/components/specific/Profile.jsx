import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon,
     AlternateEmail as UserNameIcon, 
     CalendarMonth as CalendarIcon } 
     from '@mui/icons-material';

import moment from "moment";


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
        <ProfileCard
        text={"Prateek"}
        Icon={<FaceIcon/>}
        heading={"UserName"}
        />
        <ProfileCard
        text={"Prateek"}
        Icon={<UserNameIcon/>}
        heading={"InstaUserName"}
        />
        <ProfileCard
        text={moment('2024-03-10T00:00:00.000Z').fromNow()}
        Icon={<CalendarIcon/>}
        heading={"Joined"}
        />
    </Stack>
  )
}


const ProfileCard = ({text , Icon , heading})=> (
    <Stack 
    spacing={"2rem"}
    direction={"row"} 
    alignItems={"center"}
    textAlign={"center"}
    color={"white"}>

        {Icon && Icon}
        <Stack>
            <Typography variant="body1">{text}</Typography>
            <Typography color={"gray"} variant="caption">{heading}</Typography>
        </Stack>

    </Stack>
)

export default Profile
