import { Router, Request,Response } from "express";
// import { authUser } from "../middleware/auth";
import { createPagamento } from "../module/Pagamento/useCases/create";
import { getPagamento } from "../module/Pagamento/useCases/get";
import { authUser } from "../middleware/auth";
// import { getPagamento } from "../module/Pagamento/useCases/get";
// import { PutPagamento } from "../module/Pagamento/useCases/put";


const pagamentoRouter = Router()

pagamentoRouter.post('/create',authUser, async (req:Request, res:Response) => {
    return await createPagamento.handle(req,res)
})

pagamentoRouter.get('/get/:numeroDeFactura', async (req:Request, res:Response) => {
    return await getPagamento.handle(req,res)
})

// pagamentoRouter.put('/put/:id', authUser, async (req:Request, res:Response) => {
//     return await PutPagamento.handle(req,res)
// })

export { pagamentoRouter }