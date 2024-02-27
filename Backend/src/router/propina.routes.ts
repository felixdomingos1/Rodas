import { Router, Request,Response } from "express";
import { createPropina } from "../module/propina/useCases/create/index";
import { getPropina } from "../module/propina/useCases/get/index";
import { authUser } from "../middleware/auth";
import { PutPropina } from "../module/propina/useCases/put";
import { DeletePropina } from "../module/propina/useCases/delete";

const propinaRouter = Router()

propinaRouter.post('/create', async (req:Request, res:Response) => {
    return await createPropina.handle(req,res)
})

propinaRouter.get('/get/:id', async (req:Request, res:Response) => {
    return await getPropina.handle(req,res)
})

propinaRouter.put('/put/:id', authUser, async (req:Request, res:Response) => {
    return await PutPropina.handle(req,res)
})

propinaRouter.delete('/delete/:id', authUser, async (req:Request, res:Response) => {
    return await DeletePropina.handle(req,res)
})

export { propinaRouter }