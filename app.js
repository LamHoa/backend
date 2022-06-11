import express from "express"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import router from "./route/user.js"
import connectMongo from "./database/init.js"

dotenv.config()

const app= express()
const server= http.createServer(app)

app.use(cors({credentials: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
connectMongo()
server.listen(4000, ()=> console.log("Server run on port 4000"))