import activityModel from "../models/activity.model.js";
import bookModel from "../models/books.model.js";
import issueModel from "../models/issue.model.js";

export const addBook = async (payload) => {
    try {
      //   const {receiverId} = payload.params
      const { title , stock ,description ,category } = payload.body;
  
      console.log("connection object", payload.body);
  
      // console.log("receiver", receiver)
  
      if (!title || !category ) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Please provide the Book Name and cateory ",
        });
      }
  
      const newBook = await new bookModel({
        title: title,
        category: category,
        stock: stock,
        description: description,
      }).save();
  
      console.log(newBook);
      return newBook;
    } catch (error) {
      throw error;
    }
  };

  export const fetchAllBooks = async (payload) => {
    console.log(payload.body)
    const books = await bookModel.find();
    return { books };
  }
//   export const deleteConnection = async (payload) => {
//       try {
//           const { id } = payload.params;
//           console.log("connection id", payload.params);
//           const data = await connectionModel.findByIdAndDelete(id);
//           console.log("deleted",data)
//           return data;
//       } catch (error) {
//           throw error;
//       }
//   }

export const deleteBook = async (payload) => {
    try {
      const { _id } = payload.params;
  console.log(payload.params)
      let data = await bookModel.findByIdAndDelete(_id);
  
      return { data };
    } catch (error) {
      throw error;
    }
  };
  export const updateBook = async (payload) => {
    try {
        console.log(payload.params)
        console.log(payload.body)
      let data = await bookModel.findByIdAndUpdate(payload.params, {
        $set: payload.body,
      })
      console.log(data)
      return { data };
    } catch (error) {
      throw error;
    }
  };

  export const issueNewBook = async (payload) => {
    try {
      const { bookId } = payload.body;
      const user = payload.user._id
      console.log(user)
      console.log("connection object", user);

      if (!bookId || !user ) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Please provide the all fields ",
        });
      }
  
      // console.log(receiver, sender)
      const newBook = await new activityModel({
        book: bookId,
        user :user
      }).save();
  
      console.log(newBook);
      return newBook;
    } catch (error) {
      throw error;
    }
  };
  export const updateStatusBook = async (payload) => {
    try {
      const { bookId,status } = payload.body;
      const user = payload.user._id
      console.log(user)
      console.log("connection object", user);

      if (!bookId || !user ) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Please provide the all fields ",
        });
      }
      const data = await activityModel.findOneAndUpdate(
        {
            book: bookId,
        },
        {
          $set: { status: status },
        }
      );
  
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export const searchBook = async (payload) => {
    try {
      const { title,category,author} = payload.body;
    
      console.log(payload.body)

    //   if (!title || !category ) {
    //     throw Object.assign(new Error(), {
    //       name: "BAD_REQUEST",
    //       message: "Please provide the all fields ",
    //     });
    //   }
      let data = await bookModel.find(
        {
            "$or":[
                {title:title},
                {category:category},
                {author:author},
                
            ]
        }
    )
  
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

//   export const updateConnection = async (payload) => {
//     try {
//       const {  } = payload.body;
//       console.log(payload.body)
//       console.log("body", senderId, receiverId, status );
//       const data = await connectionModel.findOneAndUpdate(
//         {
//           $and: [
//             {
//               sender: senderId,
//             },
//             {
//               receiver: receiverId,
//             },
//           ],
//         },
//         {
//           $set: { status: status },
//         }
//       );
//       console.log("SENDER",data);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };


export default {
    addBook,
    fetchAllBooks,
    deleteBook,
    updateBook,
    issueNewBook,
    updateStatusBook,
    searchBook
  
    
  };