import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const  MONGO_KEY = process.env.MONGO_KEY

import {userRouter} from './routes/users.js'
const app = express()
app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
mongoose.connect(MONGO_KEY)
app.listen(3001, ()=> console.log("Server Started"))