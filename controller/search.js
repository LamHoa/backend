import recipe from "../schema/recipe.js"

export const search= (req, res)=> {
    recipe.find({$text: {$search: req.body.search_query}}).exec((err, docs)=> {
        if(err) return console.log(err)
        return res.json(docs)
    })
}