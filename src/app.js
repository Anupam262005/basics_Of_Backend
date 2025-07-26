import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()


app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true 
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




/// router

import  userRouter from "./routes/user.route.js"

// routes declaration

app.use("/api/v1/users" , userRouter)   // when we write /users then it gives control to userRouter (which is a file) then it goes to user.route.js in route folder and execute the further program 
 
export { app }