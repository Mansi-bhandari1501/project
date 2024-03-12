import React, { useEffect, useState } from 'react'
import UserCard from './userCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/User/userAction';
import Header from '../Header';
import { Box, Button, Stack, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";



const AdminDashboard = () => {


  // const dispatch = useDispatch()
  // const token = useSelector((state) => state.user.userToken)
  // console.log(token)
  // useEffect(() => {
  //   dispatch(fetchUsers({ token }))
  // }, [dispatch])



  return (
    <div>
      <div>
        <Header />
      </div>
      <Box sx={{ marginTop: "100px" }}>
        <Stack sx={{margin:"50px"}}>

          <Box className="list-group" sx={{}}>
            <Typography >Admin Panel</Typography>
            <Stack flexDirection={'row'} sx={{gap:"10px"}}>

            <NavLink
              to="/adminDashboard/admin/Books"
              className="list-group-item list-group-item-action"
            >
              All Books
            </NavLink>
            <NavLink
              to="/adminDashboard/admin/students"
              className="list-group-item list-group-item-action"
            >
              Students
            </NavLink>

            </Stack>
           
          </Box>
        </Stack>
       
        {/* <UserCard/> */}
      </Box>
    </div>
  )
}

export default AdminDashboard
