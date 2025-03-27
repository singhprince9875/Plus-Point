const express=require("express");
// const authMiddleware = require("../middlewares/authMiddleware");
// const authController = require("../controllers/authController");
const { isLoggedin, updateProfile } = require("../controllers/userProfileController");
const userProfileRouter=express.Router();
userProfileRouter.get('/profile',isLoggedin);
userProfileRouter.put('/update-profile',updateProfile)
// userProfileRouter.post('/',authMiddleware, authController);
module.exports=userProfileRouter;
