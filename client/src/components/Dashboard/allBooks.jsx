import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooks, fetchBooks } from '../../features/Books/bookAction'
import { Box, Button, Card, CardHeader, Stack, Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import "./addBook.css"
import Books from './books';
const AllBooksCard = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] =useState("");
    const [description, setDescription] =useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("djagdjgduweg", title)
   const handleSubmit = (e) =>{
    e.preventDefault();
     dispatch(addBooks({title,stock,description,category}))
   }
   
    const token = useSelector((state) => state.user.userToken)
    
    useEffect(() => {
        dispatch(fetchBooks({ token }))
    }, [dispatch])

    const books = useSelector((state) => state.books.books.books)
    // console.log("BOOKSSS", books)

    return (
        <>
        <Typography sx={{fontSize:"25px", fontFamily:"system-ui",marginLeft:"45vw",padding:"20px"}}>BOOKS</Typography>
        <Button sx={{marginLeft:"100px", border:"1px solid blue"}} onClick={handleOpen}>Add Books</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box sx={style}>
       <form onSubmit={handleSubmit} >
        
        <Stack sx={{flexDirection:"column", gap:"20px"}}>
            <Typography>
                Add New Book
            </Typography>
          <input
          
            type="text"
            className="form-control"
            placeholder="Enter new title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter new stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter new Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Stack>

        <button className='submitBTN' type="submit" >
          Submit
        </button>
      </form>
        </Box>
      </Modal>
    {/* <Stack sx={{width:"80vw", flexDirection: "row", gap: "20px", flexWrap:"wrap" ,marginLeft:"300px" }}>
            {books && books.length && books?.map((content) => (

                <Card key={content._id} sx={{ marginTop: "10px", width: "20vw" }}>

                    <Stack flexDirection={'column'} sx={{backgroundColor:"rgba(0,0,1,0.01)", padding:"10px"}}>
                        <Typography>
                            Title :{content?.title}
                        </Typography>
                        <Typography>
                            Author :{content?.author}
                        </Typography>
                        <Typography>
                            Quantity :{content?.quantity}
                        </Typography>
                        <Typography>
                            Description :{content?.description}
                        </Typography>
                    </Stack>

                </Card>
            ))}
        </Stack> */}
        <Books/>
        
        </>
    )
}

export default AllBooksCard
