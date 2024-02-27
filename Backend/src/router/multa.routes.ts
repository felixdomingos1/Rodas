import { Router, Request,Response } from "express";
import { createMulta } from "../module/multa/useCases/create";
import { getMulta } from "../module/multa/useCases/get";


const multaRouter = Router()

multaRouter.post('/create', async (req:Request, res:Response) => {
    return await createMulta.handle(req,res)
})

multaRouter.get('/get/:id', async (req:Request, res:Response) => {
    return await getMulta.handle(req,res)
})

export { multaRouter }