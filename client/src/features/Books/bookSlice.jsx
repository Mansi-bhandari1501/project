import { createSlice } from "@reduxjs/toolkit";
import { addBooks, fetchBooks } from "./bookAction";

const initalState = {
  loading: false,
  error: null,
  books:[]
};

const booksSlice = createSlice({
  name: "book",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {

    // fetchbOOKS
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null
      console.log("fetch users",action.payload.response);
      state.books = action.payload.response;
      console.log(state.books)
    })
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })

    builder.addCase(addBooks.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(addBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null
      console.log("fetch users",action.payload.response);
      state.books = action.payload.response;
      console.log(state.books)
    })
    builder.addCase(addBooks.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
});


export default booksSlice.reducer;