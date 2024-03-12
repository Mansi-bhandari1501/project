import React from 'react'
import Header from '../Header'
import { Box, Stack, Typography } from '@mui/material'
// import Img from "../../assets/libraryImg.png"; 
import "./home.css"
import AllBooksCard from '../Dashboard/allBooks'
import Books from '../Dashboard/books'
const HomeComponent = () => {
//   const myStyle = {
//     backgroundImage: "url()",
//     height: "100vh",
//     marginTop: "-70px",
//     fontSize: "50px",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
// };
  return (
    <Box>
      <Stack flexDirection={"column"} className="Home">
      <Box className="home-nav">
          <Header />
        </Box>
      <Stack className='home-page' sx={{marginTop:"10vh",flexDirection:"column"}}>
        <Typography sx={{marginLeft:"200px",fontSize:"25px"}}>
        WELCOME TO LIBRARY
          </Typography>
        <Typography sx={{marginLeft:"500px",marginTop:"2vh" , fontSize:"22px", color:"grey"}}>
        Books are the mirrors of the soul.
          </Typography>
    <Stack sx={{flexDirection:"column",marginTop:"8vh"}}>

 <Books/>
          </Stack>
        {/* <img  sx={{height:"10px"}} src={Img} alt=''/> */}
      </Stack>
      </Stack>
    </Box>
  )
}

export default HomeComponent
