import user from "../schema/user.js"

export const loggedin= (req, res)=> {
    user.find({_id: req.body.u_id}, (err, docs)=> {
        if(docs?.length> 0) {
            return res.json(docs[0])
        }   
        return res.json([])
    })
}