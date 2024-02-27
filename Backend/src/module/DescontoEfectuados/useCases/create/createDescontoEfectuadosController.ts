import { Request, Response } from "express";
import { createPropinaSchema } from "../../../../config/yup";
import { CreateDescontoEfectuadosUseCase } from "./createDescontoEfectuadosUseCase";

class CreateDescontoEfectuadosController {
    constructor(private createDescontoEfectuadosUseCase: CreateDescontoEfectuadosUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {

            
            // await createPropinaSchema.validate(data)

            const DescontoEfectuados = await this.createDescontoEfectuadosUseCase.execute(data)
    
            
            res.status(201).json(DescontoEfectuados)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreateDescontoEfectuadosController }