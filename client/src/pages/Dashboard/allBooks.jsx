import { Box, Card, CardHeader, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import AdminDashboard from '../../components/Dashboard'
import AllBooksCard from '../../components/Dashboard/allBooks'

const AllBooks = () => {
  return (
    <div>
       <div>
       <AdminDashboard/>
        </div>
      <Box>
<AllBooksCard/>
      </Box>
    </div>
  )
}

export default AllBooks
