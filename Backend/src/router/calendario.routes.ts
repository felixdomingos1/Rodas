import { Router, Request,Response } from "express";
import { getCalendario } from "../module/calendario/useCases/get/index";


const calendarioRouter = Router()

// calendarioRouter.post('/create', async (req:Request, res:Response) => {
//     return await createCalendario.handle(req,res)
// })

calendarioRouter.get('/get/:id', async (req:Request, res:Response) => {
    return await getCalendario.handle(req,res)
})

// calendarioRouter.put('/put/:id', authUser, async (req:Request, res:Response) => {
//     return await PutCalendario.handle(req,res)
// })

export { calendarioRouter }