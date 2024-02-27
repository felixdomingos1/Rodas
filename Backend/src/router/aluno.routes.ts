import { Router, Request, Response } from "express";
import { createAluno } from "../module/aluno/useCases/create/index";
import { getAluno } from "../module/aluno/useCases/get";
import { PutAluno } from "../module/aluno/useCases/put";

const alunoRouter = Router()

alunoRouter.post('/create', async (req:Request, res: Response) => {
    return await createAluno.handle(req,res)
})

alunoRouter.get('/get/:id', async (req:Request, res: Response) => {
    return await getAluno.handle(req,res)
})
alunoRouter.put('/put', async (req:Request, res: Response) => {
    return await PutAluno.handle(req,res)
})

export { alunoRouter }