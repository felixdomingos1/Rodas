import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { router } from "./router/index";
import { ServerError } from "./error/index";
dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.use((err:Error, req:Request, res:Response, next:NextFunction) =>{
    if (err instanceof ServerError) {
        return res.status(err.status).json({ message: err.message})
    }
    return res.status(500).json({ message: 'server error'})
})


export { app }

