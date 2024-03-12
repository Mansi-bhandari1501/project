import { Avatar, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import "./header.css";
import SearchIcon from '@mui/icons-material/SearchRounded';
import LoginIcon from '@mui/icons-material/Login';
import InputAdornment from '@mui/material/InputAdornment';
import { ReactComponent as HomeLogo } from "../../assets/svg/home-logo.svg"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from "../../assets/images/logo.png"



const Header = () => {
  const [value,setValue] = useState("")
  const user = useSelector((state) => state.user.userInfo.role);
  // console.log(user)
  // const userId = user.userId;
  return (
    <Box className="Header-container">
      <Box sx={{ display: "flex", gap: "10px", width: "20vw", marginTop: "4px" }}>
      <img className="In-logo" src={Icon} alt='' ></img>

        <TextField className='search-bar'
          onChange={(e) => setValue(e.target.value)}
          sx={{
            Width: '380px',
            height: '34px',
            "& .MuiOutlinedInput-root": {
              height: "34px",
              width: "16vw"
            },
            "&.MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "0px"
            }

          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon style={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "spaceAround" }}>
        <ul className='menu' type="none" style={{ display: "flex" }}>

          <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
            <Button>
              <Link to='/' style={{textDecoration:"none"}}>
                <HomeLogo className="menu-logo" />
                <h4 style={{fontSize:"12px",textTransform:"none"}}>Home</h4>

              </Link>
            </Button>
          </li>

        
          
          <li className='menu-content'>

            <Link to='/adminDashboard' style={{textDecoration:"none"}}>
              <Avatar className="menu-logo" sx={{ marginTop: "2px", height: "28px", width: "28px" }} aria-label="recipe"
              //  src={Profile}
               >

              </Avatar>
              <h4 style={{ textAlign: "center", lineHeight: "18px" }} >{user}</h4>

            </Link>


          </li>
          <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
            <Button>
              <Link to='/signup' style={{textDecoration:"none"}}>
              <LoginIcon className="menu-logo" />
                <h4 style={{marginTop:"6px", fontSize:"12px",textTransform:"none"}}>Join</h4>
              </Link>
            </Button>
          </li>
          {/* <hr /> */}
        </ul>
      </Box>
      {/* <Box sx={{ display: "flex", gap: "20px" }}>
        <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>
          <Button>
            <Link to='/'>
             
              <h4 >For Business</h4>

            </Link>
          </Button>
        </li>
        <li className='menu-content' style={{ display: "flex", flexDirection: "column" }}>

          <NavLink className="premium" to="" >Network smarter <br /> with Primium</NavLink>
        </li>
      </Box> */}
    </Box>
  )
}

export default Header;
