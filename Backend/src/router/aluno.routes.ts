import { Router, Request, Response } from "express";
import { createAluno } from "../module/aluno/useCases/create/index";
import { getAluno } from "../module/aluno/useCases/get";

const alunoRouter = Router()

alunoRouter.post('/create', async (req:Request, res: Response) => {
    return await createAluno.handle(req,res)
})

alunoRouter.get('/get/:id', async (req:Request, res: Response) => {
    return await getAluno.handle(req,res)
})

export { alunoRouter }
//http://localhost:3000/aluno/create
//http://localhost:3000/aluno/get/1