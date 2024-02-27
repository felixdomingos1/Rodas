import { Router, Request,Response } from "express";
// import { authUser } from "../middleware/auth";
import { createDesconto } from "../module/desconto/useCases/create";
import { getDesconto } from "../module/desconto/useCases/get";
// import { PutDesconto } from "../module/desconto/useCases/put";


const descontoRouter = Router()

descontoRouter.post('/create', async (req:Request, res:Response) => {
    return await createDesconto.handle(req,res)
})

descontoRouter.get('/get/:id', async (req:Request, res:Response) => {
    return await getDesconto.handle(req,res)
})

// descontoRouter.put('/put/:id', authUser, async (req:Request, res:Response) => {
//     return await PutDesconto.handle(req,res)
// })

export { descontoRouter }