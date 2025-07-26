import { Router } from "express"; 
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)  // “When the server receives a POST request at /register, execute the registerUser function.”

 




export default router