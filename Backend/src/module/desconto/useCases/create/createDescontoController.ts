import { CreateDescontoUseCase } from "./createDescontoUseCase";
import { Request, Response } from "express";
import { createPropinaSchema } from "../../../../config/yup";

class CreateDescontoController {
    constructor(private createDescontoUseCase: CreateDescontoUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {

            
            // await createPropinaSchema.validate(data)

            const Desconto = await this.createDescontoUseCase.execute(data)
    
            
            res.status(201).json(Desconto)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreateDescontoController }