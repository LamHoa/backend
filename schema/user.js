import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    emailOrtelephone: {type: !String},
    fullname: {type: !String}, 
    username: {type: !String},
    password: {type: !String},
    avatar_user: {type: !String},
    favourite_recipe: {type: !Array}
})

export default mongoose.model("User", userSchema)