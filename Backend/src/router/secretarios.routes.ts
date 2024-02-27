import { Router, Request, Response } from "express";
import { createSecretario } from "../module/secretario/useCases/create/index";
import { getSecretario } from "../module/secretario/useCases/get";
import { authSecretario } from "../module/secretario/useCases/auth";

const secretarioRouter = Router()

secretarioRouter.post('/create', async (req:Request, res: Response) => {
    return await createSecretario.handle(req,res)
})

secretarioRouter.get('/get/:id', async (req:Request, res: Response) => {
    return await getSecretario.handle(req,res)
})
secretarioRouter.post('/auth/', async (req:Request, res: Response) => {
    return await authSecretario.handle(req,res)
})

export { secretarioRouter }