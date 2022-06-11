import user from "../schema/user.js"

export const login= (req, res)=> {
    user.find({emailOrTelephone: req.body.data.emailOrTele, password: req.body.data.password}, (err, docs)=> {
        console.log(docs)
        if(docs?.length> 0) {
            return res.json(["success", docs[0]._id.toString()])
        }   
        return res.json("failed")
    })

}   