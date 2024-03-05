import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from '../utils/validation';
const Login = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleLogin = () => setLogin((prev) => !prev);
  const name = useInputValidation("");
  const userName = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  const password = useStrongPassword("");
  const avatar = useFileHandler("single");
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgb(255 225 209),rgb(249 159 159)",

      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
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
                    value={userName.value}
                    onChange={userName.changeHandler}
                  />

                  <TextField
                    required
                    fullWidth
                    type='password'
                    label="password"
                    margin='normal'
                    variant='outlined'
                    value={password.value}
                    onChange={password.changeHandler}
                  />

                  {password.error && (
                    <Typography color="error" variant='caption'>
                      {password.error}
                    </Typography>
                  )}

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
                    <Stack position={"relative"} margin={"auto"} width={"10rem"}>
                      <Avatar
                        sx={{
                          width: "10rem",
                          height: "10rem",
                          objectFit: "contain"
                        }}
                        src={avatar.preview}
                      />
                 
                      <IconButton
                        sx={{
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                          color: "white",
                          bgcolor: "rgba(0,0,0,0.5)",
                          ":hover": {
                            bgcolor: "rgba(0,0,0,0.7)"
                          },
                        }}
                        component={"label"}
                      >
                        <>
                          <CameraAltIcon />
                          <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                        </>
                      </IconButton>
                    </Stack>

                   
                    <TextField
                      required
                      fullWidth
                      label="name"
                      margin='normal'
                      variant='outlined'
                      value={name.value}
                      onChange={name.changeHandler}
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
                      value={userName.value}
                      onChange={userName.changeHandler}
                    />
                    {userName.error && (
                      <Typography color="error" variant='caption'>
                        {userName.error}
                      </Typography>
                    )}
                    <TextField
                      required
                      fullWidth
                      type='password'
                      label="password"
                      margin='normal'
                      variant='outlined'
                      value={userName.pasword}
                      onChange={userName.changeHandler}
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
    </div>

  )
}

export default Login
