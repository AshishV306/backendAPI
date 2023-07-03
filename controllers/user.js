import User from "../models/user.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res)=>{

    const allUser = await User.find({})
    res.json({
        success: true,
        allUser,
    })
};

export const register = async (req, res)=>{

    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.status(404).json({
            success: false,
            message: "User Already Exist",
        });
    //   return res.redirect("/login");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
  
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // res.status(201).json({
    //     success: true,
    //     message: "Registered Successfully",
    // });
  
    // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   expires: new Date(Date.now() + 15 * 60 * 1000),
    // });
    //we converted given code into sendCookie function in folder utils
    sendCookie(user, res, "Registered Successfully", 201)
    //res.redirect("/");
};

export const login = async (req, res)=>{

    const {name, email, password } = req.body;

    //here we used .select("+password") becaused we have set select for password as false in schema
    // so when finding user it will not include password in result so we override it with + symbole and include it

    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password",
        });
        //return res.redirect("/register");
    }

    const isMatch = await bcrypt.compare(password, user.password);
 
    if (!isMatch){
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password",
        });
       // return res.render("login", { email, message: "Incorrect Password" });
    }
  
    sendCookie(user, res, `Welcome Back ${name}`, 200)
    //res.redirect("/");
};


export const getMyProfile = (req,res)=>{

       res.status(200).json({
           success: true,
           user: req.user,
       }); 
   };


   
export const logout = (req, res) =>{
    res.status(200).cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    }).json({
      success: true,
      user: req.user,
    });
} 

// export const getUserById = async(req,res)=>{
//     console.log(req.query);

//     const user2 = await User.findById(req.query.id)
//     res.json({
//         success: true,
//         user2,
//     }); 
// };


// export const updateUser = async(req,res)=>{

//     const user2 = await User.findById(req.params.id)
//     res.json({
//         success: true,
//         message: "Updated",
//     }); 
// };

// export const deleteUser = async(req,res)=>{

//     const user2 = await User.findById(req.params.id)

//     // await user2.remove();

//     res.json({
//         success: true,
//         message: "Deleted",
//     }); 
// };