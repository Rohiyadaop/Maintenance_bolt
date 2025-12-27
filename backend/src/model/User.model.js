import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
const userSchema=new Schema({
    
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email'
      ]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
})

userSchema.pre("save",async function name(next) {
    if(!this.isModified("password")) return next
    this.password=await bcrypt.hash(this.password,10)
    next
})

userSchema.methods.isPasswordCorrect= async function name(password) {
        return await bcrypt.compare(password,this.password)
}

useSchema.methods.generateAccessToken=async function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export const User=mongoose.model("User",userSchema)