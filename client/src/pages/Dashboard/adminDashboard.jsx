import React from 'react'
import AdminDashboard from '../../components/Dashboard'
import Edu from "../../assets/images/edu.png"
import { Box, Stack, Typography } from '@mui/material'
const AdminDashboardComponent = () => {
  return (
    <div>
      <AdminDashboard/>
      <Stack flexDirection={'column'} sx={{width:"500px" ,marginLeft:"30vw",}}>

      <img src={Edu} alt='' style={{marginLeft:"",}}></img>
      <Typography>
      There is more treasure in books than in all the pirate's loot on Treasure Island.
      </Typography>
      </Stack>
    </div>
  )
}

export default AdminDashboardComponent
