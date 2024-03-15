import { Backdrop, Box, Drawer, Grid, IconButton, Menu, Stack, Tooltip, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import { grayColor, orange } from '../components/constants/color'
import { Backpack as BackpackIcon, KeyboardBackspace as KeyboardBackspaceIcon, MenuOpen } from '@mui/icons-material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { sampleChats } from '../components/constants/sampleData'
import { Link } from '../components/styles/StyledComponent'
import AvatarCard from '../components/shared/AvatarCard'

const Groups = () => {

  const chatId = useSearchParams()[0].get("groups");
  const navigate = useNavigate();
  console.log(chatId);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateBack = () => {
    navigate("/");
  }

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  }

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  }

  const IconBtn = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 1000,
          }
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuOpen />
        </IconButton>
        </Box>
        <Tooltip title="back">
          <IconButton sx={{
            position:"absolute",
            left:"1rem",
            top:"1rem",
            zIndex:1000,
            color:"white",
            bgcolor:"rgba(0,0,0,0.5)",
            ":hover":{
              bgcolor:"rgba(0,0,0,0.7)"
            }
          }} onClick={navigateBack}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Tooltip>
     
    </>
  )

  return (
    <Grid container height={"100vh"}>
      <Grid item sm={4}
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundColor: orange
        }}
        bgcolor={"bisque"}
      >
        <GroupsList  mygroups= {sampleChats} 
        chatId={chatId} />
      </Grid>


      <Grid item xs={12} sm={8} sx={{
        display : "flex",
        flexDirection : "column",
        alignItems: "center",
        position : "relative",
        padding:"1rem 3rem"

      }}>
        
          {IconBtn}
       
      </Grid>


      <Drawer sx={{
        display:{
          xs:"block",
          sm:"none",
        }
        
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileClose}>
        <GroupsList  mygroups= {sampleChats} 
        chatId={chatId} w={"50vw"} />
      </Drawer>
    </Grid>
  )
}

const GroupsList = ({mygroups=[] , chatId , w="100%"})=>(
  
  <Stack>
      {
        mygroups.length > 0 ? (
          mygroups.map((group)=>(
            <GroupListItem group = {group} chatId = {chatId} key={group._id}/>
          ))
        ) :(
          <Typography textAlign={"center"}>No groups</Typography>
        )
      }
  </Stack>
)



const GroupListItem = memo(({group, chatId})=>{
    const {name , avatar , _id} = group;

    return (
      <Link to={`?group=${_id}`}
      onClick={(e)=>{
        if(chatId===_id) e.preventDefault();
      }}>
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
          <AvatarCard avatar={avatar}/>
          <Typography>{name}</Typography>
        </Stack>
      </Link>
    )
})
export default Groups
