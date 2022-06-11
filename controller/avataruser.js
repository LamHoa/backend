import user from "../schema/user.js"

export const avataruser= (req, res)=> {
    user.findOneAndUpdate({_id: req.body._id}, {avatar_user: req.body.avatar_user}, {upsert: true}, (err=> {
        if(err) return console.log(err)
        res.json("success")
    }))
}