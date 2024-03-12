import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import "./sign-up.css";
import "../Login/login.css";
import {
  // FormControl,
  IconButton,
  InputAdornment,
  // InputLabel,
  OutlinedInput,
} from "@mui/material";
import { NavLink } from "react-router-dom";
// import Logo from "../../assets/linkedIn_logo.png";
import { registerUser } from '../../features/User/userAction';
import { useDispatch } from 'react-redux';


const SignupComponent = () => {
  const dispatch = useDispatch();

  // const [ 
  //     selectedValue, 
  //     setSelectedValue, 
  // ] = useState("option1"); 

  // const handleRadioChange = ( 
  //     value 
  // ) => { 
  //     setSelectedValue(value); 
  // }; 

  // const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleType, setRoleType] = useState("admin");
  const data = {
    email: email,
    password: password,
    roleType: roleType
  }
  console.log(data)
  // const [phone,setPhone] =  useState("")
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //   const { } = useSelector(
  //     (state) => state.user
  //   );
  const navigate = useNavigate();
  // form function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
    dispatch(registerUser(data))
      .unwrap()
      .then((res) => {
        console.log(res, "ghgrhtrh");
        console.log("hello");
        console.log(res.status)
        if (res.status === 200 || res.status === 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err, "reth")
        alert(err);
        console.log("error");
        console.log("err", err);
      });
  };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         dispatch(registerUser(email,password))
  //     //   const res = await axios.post("http://localhost:8080/users/register", {
  //     //     email,
  //     //     password,
  //     //   });
  //     //   console.log(email, password);
  //     //   if (res && res.data.success) {
  //     //     // toast.success(res.data && res.data.message);
  //     //     alert(res.data && res.data.message);
  //         // navigate("/login");
  //     //   } else {
  //     //     // toast.error(res.data.message);
  //     //     alert(res.data.message);
  //     //   }
  //     } catch (error) {
  //       console.log(error);
  //       // toast.error("Something went wrong");
  //       alert("Something went wrong");
  //     }
  //     // console.log(process.evn.REACT_APP_API)
  //   };

  return (
    <>
      <div className="signup-page">
        <svg
          className="left-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
            fill="black"
          />
        </svg>
        <section className="signin-container ">
          <div className="signup-data">
            <h3 className="signup-heading">Create a new account .</h3>
            <p className="login-link">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">Sign-in</NavLink>
              </span>
            </p>
            <form onSubmit={handleSubmit}>

              <label>
                <input
                  className="inputemail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  name="email"
                  //   onChange={getdata}
                  placeholder="Enter Email"
                  required

                />
              </label>
              <label>
                <input
                  className="input-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  name="password"
                  //   onChange={getdata}
                  placeholder="password"
                  required

                />
              </label>
              <label>
                <input
                  className="input-password"
                  type="role"
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}

                  name="password"
                  //   onChange={getdata}
                  placeholder="role"
                  required

                />
              </label>


              <input
                className="btn-submit"
                type="submit"
                // onClick={addData}
                value="Agree & Join"
                style={{ fontSize: "16px" }}
              />
              {/* <Button className="btn" variant="contained">submit</Button> */}
            </form>
          </div>
        </section>
        {/* <div className="right_data"> */}
        <svg
          className="right-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
        >
          <path
            d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
            fill="black"
          />
        </svg>
      </div>
      {/* </div> */}
    </>
  );
}

export default SignupComponent;
