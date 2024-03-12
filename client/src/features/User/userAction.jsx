import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from '../../service/user.service';
import axios from "axios";
import { ACTION_TYPE } from "./userType";

export const registerUser = createAsyncThunk(
ACTION_TYPE.ADD_USER,
  async ({ email, password,roleType }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };  
      console.log(email,password)
      const res = await axios.post(`http://localhost:8080/users/register`,{email,password,roleType},config)

      // const res = await userRegister({email,password},config)
      console.log(res)
      return res
    } 
    catch (error) {
      console.log(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  ACTION_TYPE.SIGN_IN,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("action", email, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await userLogin({email,password},config);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchUsers = createAsyncThunk(
  ACTION_TYPE.GET_USER,
  async({token},{rejectWithValue})=>{
    try{
      console.log("TOKEN",token)
    
      const res = await axios.get(`http://localhost:8080/users`,
      {headers:{Authorization: token}}
      );
      console.log(res);
      const data = await res.data;
      console.log(data)
      return data;

    }
  catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
}
)
