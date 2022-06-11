import {dbconnection} from "../database/init.js"    

export const createrecipe= (req, res)=> {
    dbconnection.collection("recipes").insertOne({
        title: req.body.title,
        serving: req.body.serving, 
        level: req.body.level,
        cooktime: req.body.cooktime,
        ingredients: req.body.ingredients,
        description: req.body.description,
        method: req.body.method,
        photo: req.body.photo,
        own: req.body.own,
    })    
    .then(()=> res.json("success"))
    .catch(err=> console.log(err))
}