"use strict";
// import { Request, Response } from "express";
// import { PutPagamentoUseCase } from "./putPagamentoUseCase";
// class PutPagamentoController {
//     constructor(private putPagamentoUseCase: PutPagamentoUseCase) { }
//     async handle(req: Request, res: Response) {
//         const { numeroDeFactura } = req.params
//         const { mainAdmin, ...data } = req.body
//         try {
//             if (!mainAdmin) {
//                 return res.status(400).json({ message:"Apenas a administradora pode actualizar as Pagamentos"})
//             }
//             const Pagamento = await this.putPagamentoUseCase.execute({numeroDeFactura, ...data})
//             return res.status(201).json(Pagamento)
//         } catch (error: any) {
//             return res.status(400).json({ message: error.message })
//         }
//     }
// }
// export { PutPagamentoController }
