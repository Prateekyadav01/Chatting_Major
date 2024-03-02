import React, { useState } from 'react'
import { Button, Container, Paper, TextField, Typography } from "@mui/material"
const Login = () => {
  const [isLogin, setLogin] = useState(true);

const toggleLogin = ()=> setLogin((prev)=>!prev);
  return (
    <Container 
     component={"main"} 
     maxWidth="xs"
     sx={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
     }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {

          isLogin ? (
            <>
              <Typography variant='h5'>Login</Typography>
              <form style={{

              }}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin='normal'
                  variant='outlined'
                />

                <TextField
                  required
                  fullWidth
                  type='password'
                  label="Username"
                  margin='normal'
                  variant='outlined'
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant='contained'
                  color='primary'
                  type='submit'
                  fullWidth
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button fullWidth variant='text' onClick={toggleLogin}>
                  Sign up Instead
                </Button>
              </form>
            </>
          )
            :
            (
              <>
               <Typography variant='h5'>SignUp</Typography>
              <form style={{

              }}>
                <TextField
                  required
                  fullWidth
                  label="name"
                  margin='normal'
                  variant='outlined'
                />
                 <TextField
                  required
                  fullWidth
                  label="bio"
                  margin='normal'
                  variant='outlined'
                />
                 <TextField
                  required
                  fullWidth
                  label="Username"
                  margin='normal'
                  variant='outlined'
                />

                <TextField
                  required
                  fullWidth
                  type='password'
                  label="Username"
                  margin='normal'
                  variant='outlined'
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant='contained'
                  color='primary'
                  type='submit'
                  fullWidth
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button fullWidth variant='text' onClick={toggleLogin}>
                  Login up Instead
                </Button>
              </form>
            </>
              
            )

        }
      </Paper>

    </Container>
  )
}

export default Login
