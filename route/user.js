import express from "express"
import uploadCloud from "../cloudinary/upload.js"
import { avataruser } from "../controller/avataruser.js"
import { categories } from "../controller/categories.js"
import { createrecipe } from "../controller/createrecipe.js"
import { detailrecipe } from "../controller/detailrecipe.js"
import { favourite } from "../controller/favourite.js"
import { like_ } from "../controller/like_.js"
import { loggedin } from "../controller/loggedin.js"
import { login } from "../controller/login.js"
import { myrecipe } from "../controller/myrecipe.js"
import { search } from "../controller/search.js"
import { signup } from "../controller/signup.js"
import { unlike } from "../controller/unlike.js"
import { uploadimage } from "../controller/uploadimage.js"

const router= express.Router()

router.post("/login", login)
router.post("/signup", signup)
router.post("/loggedin", loggedin)
router.post("/upload/image/cloud",uploadCloud.single("file"), uploadimage)
router.post("/upload/avatar", avataruser)
router.post("/create/recipe", createrecipe)
router.post("/myrecipe", myrecipe)
router.post("/detailrecipe", detailrecipe)
router.post("/favourite", favourite)
router.post("/search", search)
router.post("/like/recipe", like_)
router.post("/unlike/recipe", unlike)
router.get("/categories", categories)

export default router