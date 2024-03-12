import { Box, Card, CardHeader, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import AdminDashboard from '../../components/Dashboard'
import UserCard from '../../components/Dashboard/userCard'

const Students = () => {
    return (
        <div>
            <div>
                <AdminDashboard />
            </div>
            <Box>
                <UserCard />
            </Box>
        </div>
    )
}

export default Students
