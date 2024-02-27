import { CreateMultaUseCase } from "./createMultaUseCase";
import { Request, Response } from "express";
import { createPropinaSchema } from "../../../../config/yup";

class CreateMultaController {
    constructor(private createMultaUseCase: CreateMultaUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {
            await createPropinaSchema.validate(data)

            const Multa = await this.createMultaUseCase.execute(data)
    
            
            res.status(201).json(Multa)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreateMultaController }