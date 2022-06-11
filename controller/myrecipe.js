import recipe from "../schema/recipe.js"

export const myrecipe= (req, res)=> {
    recipe.find({own: req.body._id}, (err, docs)=> {
        if(docs?.length> 0) {
            return res.json(docs)
        }
        return res.json([])
    })
}