import {dbconnection} from "../database/init.js"    

export const signup= async (req, res) => {
    await dbconnection.collection("users").insertOne({
        emailOrtelephone: req.body.data.emailOrtele,
        fullname: req.body.data.fullname,
        username: req.body.data.username,
        password: req.body.data.password,
        avatar_user: "",
        favourite_recipe: []
    })
    return res.json("success")
}