import { response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req , res ) => {
  response.status(200).json({
    message: "ok"
  })
})


export { registerUser}