import express  from "express";
// import { userController } from '../controllers/index.js';
import { userController } from '../controller/index.js';
import { requireSignIn ,isAdmin} from "../middlewares/auth.middleware.js";
// import { requireSignIn } from "../middlewares/auth.middleware.js";
const { loginController,  registerController, getAllUsers, userDetail,followController} = userController;
const router = express.Router()


 router.get('/',getAllUsers);
 router.post('/register',registerController);
 router.post('/login', loginController);
 router.get('/admin-auth',requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });
  router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
//  router.put('/userDetails/:_id',requireSignIn, userDetail);
 export default router;
