// require('dotenv').config({})

import dotenv from "dotenv" 
import mongoose from 'mongoose' ;
import { DB_NAME } from '../constants.js';
import express from 'express'
const app = express()



const connectDB = async ()=>{
  try{
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log("connected mondoDB",`${connectionInstance.connection.host}`);
  }catch(error){
         console.log("mongoDB connectin error",error);
         process.exit(1)
  }
}

// connectDB();
export default connectDB; 










/*
;( async () => {
  try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error", (error)=>{
      console.log("error" , error);
      throw error;
     })


     app.listen(process.env.PORT , ()=>{
      console.log(`app is listening on port ${process.env.PORT}`);
     })
  }catch(error){
            console.log(error);
            throw err
  }
} )()

*/