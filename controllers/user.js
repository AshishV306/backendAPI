import User from "../models/user.js"

export const getAllUsers = async (req, res)=>{

    const allUser = await User.find({})
    res.json({
        success: true,
        allUser,
    })
};

export const newUsers = async (req, res)=>{

    const{name, email, password} = req.body;

    await User.create({
        name: name, 
        email: email, 
        password: password
    });

    res.status(201).cookie("token", "lol").json({ //we can send our status code as well
        success: true,
        message: "Registered Successfully",
    });
};

export const getUserById = async(req,res)=>{
    console.log(req.query);

    const user2 = await User.findById(req.query.id)
    res.json({
        success: true,
        user2,
    }); 
};

export const getUserDynamicId = async(req,res)=>{
    console.log(req.params);

    const user2 = await User.findById(req.params.id)
    res.json({
        success: true,
        user2,
    }); 
};