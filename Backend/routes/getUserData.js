const express=require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const authController = require("../controllers/authController");
const getUserDataRouter=express.Router();
 
getUserDataRouter.post('/',authMiddleware, authController);
module.exports=getUserDataRouter;