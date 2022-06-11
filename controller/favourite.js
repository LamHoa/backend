import recipe from "../schema/recipe.js"

export const favourite= (req, res)=> {
     recipe.find({ _id: { $in: req.body.favourite } }, (err, docs)=> {
        if(docs?.length> 0) {
            return res.json(docs)
        }
        return res.json([])
    })
}
    