import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controller/user.js";
import { verifyAdmin,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user , you are logged in!!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user , you are logged in and u can delete u r account!!");
// });

// router.get("/checkadmin/:id", verifyAdmin ,(req,res,next) =>{
//     res.send("Hello Admin, U are always welcome!!");
// })

// UPDATE

router.put("/:id", verifyUser, updateUser);

// DELETE

router.delete("/:id", verifyUser, deleteUser);
// GET

router.get("/:id", verifyUser, getUser);

// GET ALL

router.get("/", verifyAdmin, getUsers);

export default router;
