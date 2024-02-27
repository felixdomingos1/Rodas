import express, { NextFunction, Request, Response }  from "express";
import { router } from "./router";
import * as dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next:NextFunction)=>{

    return res.status(400).json(err.message)
} )

export { app }