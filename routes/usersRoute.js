//import { Router } from "express";

// router.post("/register", async (req, res) => {
//   try {
//     const newuser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       cPassword: req.body.cPassword,
//     });
//     console.log(newuser);
//     const user = await newuser.save();
//     res.send("user register successful");
//   } catch (error) {
//     return res.status(400).json({ error });
//   }
// });


const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    
    const { name, email, password, cpassword } = req.body;
    console.log(name)
    const user = new User({ name, email, password, cpassword });
    await user.save()
      .then(() => res.status(200).json({ message: "Registred Successfull" }));
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User Already exists" });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email);
    console.log(password)
    const user = await User.findOne({ email: email, password: password });
    console.log(user)
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.send(temp);
    } else {
      return res.status(400).json({ message: "login failed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
