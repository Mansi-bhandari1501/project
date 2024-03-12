import { createAsyncThunk } from "@reduxjs/toolkit";
import { BOOKS_TYPE } from "./bookType";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    BOOKS_TYPE.GET_BOOK,
    async({rejectWithValue})=>{
      try{
        // console.log("TOKEN",token)
      
        const res = await axios.get(`http://localhost:8080/books`,
        // {headers:{Authorization: token}}
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
export const addBooks = createAsyncThunk(
    BOOKS_TYPE.ADD_BOOK,
    async({title,stock,description,category},{rejectWithValue})=>{
      try{
        // console.log("TOKEN",token)
      
        const res = await axios.post(`http://localhost:8080/books`,{title,stock,description,category}
        // {headers:{Authorization: token}}
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