// const userModel = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt=require("jsonwebtoken");
// const registerController = async (req, res) => {
//   try {
//     // Check if the user already exists
//     const existingUser = await userModel.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res.status(409).send({ message: "User already registered", success: false });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.pass, salt);
    
//     // Create a new user object with the hashed password
//     const newUser = new userModel({
//       ...req.body, // Spread existing body properties
//       pass: hashedPassword // Use the hashed password
//     });

//     // Save the new user to the database
//     await newUser.save();

//     // Respond with success
//     res.status(201).send({ message: "User registered successfully", success: true });
//   } catch (err) {
//     console.error(err); // Log the error for debugging
//     res.status(500).send({ message: "Something went wrong while registering", success: false });
//   }
// };

// module.exports = registerController;

const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const { redirect } = require("react-router-dom");
// const alert=require("")
const registerController = async (req, res) => {
  try {
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      // alert("User already Registered, Please Login");
      // redirect("/Login");
      return res.status(400).send({ message: "User already registered", success: false });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pass, salt);
    
    // Create a new user object with the hashed password
    const newUser = new userModel({
      ...req.body, 
      pass: hashedPassword
    });

  
    await newUser.save();

    // Respond with success
    // res.status(201).send({ message: "User registered successfully", success: true });


    const token=jwt.sign({id:newUser._id}, process.env.JWT_SECRETKEY, { expiresIn: '1h' });
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,// Ignore this line
        // profilePicture: newUser.profilePicture, // Return profile picture URL
      },
      success: true,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Somethng went wrong while Register' });
  }
};

module.exports = registerController;

