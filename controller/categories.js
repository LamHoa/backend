import recipe from "../schema/recipe.js"

export const categories= (req, res)=> {
    if(req.query.id == 1) {
        recipe.aggregate([{ $sample: { size: 10 } }]).exec((err, docs)=> {
            if(err) return err
            return res.json(docs)
        })
    }
    if(req.query.id != 1 && req.query.id < 5) {
        const offset= parseInt(req.body.id - 2)
        recipe.find({}).limit(10).skip(offset * 10).exec((err, docs)=> {
            if(err) return console.log(err)
            return res.json(docs)
        })
    }
    if(req.query.id == 5) {
        recipe.aggregate([{ $sample: { size: 10 } }]).exec((err, docs)=> {
            if(err) return err
            return res.json([])
        })
    }
}