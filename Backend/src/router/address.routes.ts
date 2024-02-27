import { Router, Request,Response } from "express";
import { authUser } from "../middleware/auth";
import { createAddress } from "../module/address/useCases/create";
import { getAddress } from "../module/address/useCases/get";
import { PutAddress } from "../module/address/useCases/put";


const addressRouter = Router()

addressRouter.post('/create', async (req:Request, res:Response) => {
    return await createAddress.handle(req,res)
})

addressRouter.get('/get/:id', async (req:Request, res:Response) => {
    return await getAddress.handle(req,res)
})

addressRouter.put('/put/:id', authUser, async (req:Request, res:Response) => {
    return await PutAddress.handle(req,res)
})

export { addressRouter }