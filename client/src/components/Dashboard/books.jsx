import { Card, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../features/Books/bookAction'

const Books = () => {
    const dispatch =useDispatch()
    const token = useSelector((state) => state.user.userToken)
    
    useEffect(() => {
        dispatch(fetchBooks({ token }))
    }, [dispatch])

    const books = useSelector((state) => state.books.books.books)
  return (
    <div>
       <Stack sx={{width:"80vw", flexDirection: "row", gap: "20px", flexWrap:"wrap" ,marginLeft:"300px" }}>
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
        </Stack>
        
    </div>
  )
}

export default Books
