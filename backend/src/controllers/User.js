import { User } from "../model/User.model.js";
import { ApiError } from "../utils/ApiErrorResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateAccess= async(userId)=>{
    try {
        var user= await User.findById(userId)
        const accesToken=await user.generateAccessToken()
        return {accesToken}
    } catch (error) {
        throw new ApiError(500,"something went wrong while genrating refresh token")
    }
}

const createUser=asyncHandler((async (req,res)=>{
    const {name,email,password,reEnterPassword}=req.body
    if(!name ||!email||!password||!reEnterPassword){
        throw new ApiError(404,"All parameter is required",[])
    }

    if(password!=reEnterPassword){
        throw new ApiError(401,"Password Dismatched")
    }
    const userExisted=await User.findOne({email})
    if(userExisted){
        throw new ApiError(402,"User Exist")
    }
    const user=await User.create({
        name,
        email,
        password
    })
    const userConfirmation = await User.findById(user._id).select(
        "-password "
    )
    if(!userConfirmation){
        throw new ApiError(500,"Error while registering the user")
    }
    
    const {accesToken}=await generateAccess(userConfirmation._id)
   const options={
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .cookie("accesToken",accesToken,options)
    .json(
        new ApiResponse(200,{user:userConfirmation,accesToken},"User is Logged in")
    ) 
}))

const login=asyncHandler((async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        throw new ApiError(404,"Required field not Found",[])
    }
    const find=await User.findOne({$or:[{email},{username}]})

    if(!find){
        throw new ApiError(404,"user does not exit")
    }

    const password_check=await find.isPasswordCorrect(password)

    if(!password_check){
        throw new ApiError(404,"Password incorrect")
    }
    const {accesToken}=await generateAccess(find._id)
   const options={
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .cookie("accesToken",accesToken,options)
    .json(
        new ApiResponse(200,{user:loggedinUser,accesToken},"User is Logged in")
    ) 
}))


export {
    createUser,login
}