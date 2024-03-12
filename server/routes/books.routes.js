import express  from "express";
// import { userController } from '../controllers/index.js';
import { bookController } from '../controller/index.js';
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
const { newBook,getAllBook,updateBookDetails,removeBook,requestBookIssue,updateBookIssue,searchBooks} = bookController;
const router = express.Router()


 router.post('/',newBook);
 router.post('/issue',requireSignIn ,requestBookIssue);
 router.put('/issue',requireSignIn ,updateBookIssue);
 router.get('/',getAllBook);
 router.get('/search',requireSignIn,isAdmin  ,searchBooks);
 router.delete('/:_id',requireSignIn,isAdmin, removeBook);
 router.put('/:_id',requireSignIn,isAdmin, updateBookDetails);
 export default router;
