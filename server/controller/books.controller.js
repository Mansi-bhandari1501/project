import errorHandler from "../lib/utils.js";
import booksService from "../service/books.service.js";



export const newBook = async (req, res) => {
    try {
      const response = await booksService.addBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };

export const getAllBook = async (req, res) => {
    try {
      const response = await booksService.fetchAllBooks(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const findBook = async (req, res) => {
    try {
      const response = await booksService.addBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const removeBook = async (req, res) => {
    try {
      const response = await booksService.deleteBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const updateBookDetails = async (req, res) => {
    try {
      const response = await booksService.updateBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };

export const requestBookIssue = async (req, res) => {
    try {
      const response = await booksService.issueNewBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const updateBookIssue = async (req, res) => {
    try {
      const response = await booksService.updateStatusBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const searchBooks = async (req, res) => {
    try {
      const response = await booksService.searchBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
// export const issueBook = async (req, res) => {
//     try {
//       const response = await booksService.issueBook(req);
//       return res.status(201).json({
//         success: true,
//         response
//       });
//     } catch (error) {
//       errorHandler(res, error);
//     }
//   };

 

  export default{
    // findBook,
    newBook,
    getAllBook,
    removeBook,
    updateBookDetails,
    requestBookIssue,
    updateBookIssue,
    searchBooks
  }