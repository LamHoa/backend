import user from "../schema/user.js"

export const unlike= async (req, res)=> {
    const filter= { _id: req.body.id_user }
    const a= req.body.list_favourite_user?.filter(item=> item != req.body.id_recipe)
    const update= { favourite_recipe: a }
    await user.findOneAndUpdate(filter, update)
    return res.json("success")
}