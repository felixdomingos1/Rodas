import { Request, Response } from "express";
import { CreatePagamentoUseCase } from "./createPagamentoUseCase";
import { createPagamentoSchema } from "../../../../config/yup";

class CreatePagamentoController {
    constructor(private createPagamentoUseCase: CreatePagamentoUseCase ) { }

    async handle(req: Request, res: Response ) {
        const {mainAdmin, ...data} = req.body

        try {
            await createPagamentoSchema.validate(data)

            
            
            
            
            const Pagamento = await this.createPagamentoUseCase.execute(data)
    
            
            res.status(201).json(Pagamento)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreatePagamentoController }