import recipe from "../schema/recipe.js"

export const detailrecipe= (req, res)=> {
    recipe.find({_id: req.body._id}, (err, docs)=> {
        if(docs?.length> 0) {
            return res.json(docs)
        }
        return res.json([])
    })
}