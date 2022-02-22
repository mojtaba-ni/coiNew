import mongoose from "mongoose"
import bcrypt from "bcryptjs/dist/bcrypt.js";
import isEmail from 'validator/lib/isEmail.js'

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:[true,"Plz enter your email asshole"],
        validate:[isEmail,"Plz enter Validate email"]
    },
    password:{
        type: String,
        required:[true,"plz enter your password"],
        minLength:[6 , "Password needs to be more 6char"]
    },
})
UserSchema .pre('save',async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password , salt)
    next()
})
const Users = mongoose.model('Users', UserSchema)

export default Users