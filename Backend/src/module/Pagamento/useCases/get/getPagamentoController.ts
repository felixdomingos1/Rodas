import { Request, Response } from "express";
import { GetPagamentoUseCase } from "./getPagamentoUseCase";

class GetPagamentoController {
    constructor(private getPagamentoUseCase: GetPagamentoUseCase ) { }

    async handle(req: Request, res: Response ) {
        const {numeroDeFactura } = req.params

        try {

            const Pagamento = await this.getPagamentoUseCase.execute(numeroDeFactura)
            
            res.status(201).json(Pagamento)

        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { GetPagamentoController }