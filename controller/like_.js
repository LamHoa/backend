import user from "../schema/user.js"

export const like_= async (req, res)=> {
    const filter= { _id: req.body.id_user }
    req.body.list_favourite_user?.push(req.body.id_recipe)
    const update= { favourite_recipe: req.body.list_favourite_user }
    await user.findOneAndUpdate(filter, update)
    return res.json("success")
}