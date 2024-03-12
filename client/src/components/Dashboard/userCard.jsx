import { Avatar, Box, Button, Card, CardHeader, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../features/User/userAction'

const UserCard = () => {

  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.userToken)
  console.log(token)
  useEffect(() => {
    dispatch(fetchUsers({ token }))
  }, [dispatch])


  const users = useSelector((state) => state.user.users)
  console.log("USERSS", users)

  return (
    // {users.length === 0 && <>No new users's</>}
    
    <Stack flexDirection={'row'} sx={{gap:"20px" , justifyContent:"center"}} >

      {users && users.length && users?.map((content) => (
        <Card key={content._id} sx={{ width: "15vw", marginTop: "10px", marginBottom: "10px",position:"relative", height:"25vh" }}>
          <CardHeader
            sx={{ display: "flex", flexDirection: "column" }}
            avatar={
              <Avatar  sx={{ height: "80px", width: "80px",position:"absolute" ,top: "10px", right: "100px" }} aria-label="recipe">
                {/* <img src={Profile} style={{objectFit:"scale-down"}}></img> */}
              </Avatar>
            }

            title={
              <Typography sx={{ position: "absolute", top: "110px" ,right:"80px", fontSize:"14px"}}>
                {content?.email}
              </Typography>
            }

            subheader={
              <Typography sx={{ position: "absolute", top: "110px" ,right:"20px"}}>

                

                <Typography sx={{ fontSize: "12px", left: "2px" }}>

                </Typography>
              </Typography>
            }
            />
            <Button sx={{ position: "absolute", top: "150px" ,right:"100px"}}> View user
            </Button>
        </Card>

      ))}
    </Stack>
  )
}

export default UserCard
