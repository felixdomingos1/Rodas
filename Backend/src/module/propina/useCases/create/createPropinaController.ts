import { CreatePropinaUseCase } from "./createPropinaUseCase";
import { Request, Response } from "express";
import { createPropinaSchema } from "../../../../config/yup";

class CreatePropinaController {
    constructor(private createPropinaUseCase: CreatePropinaUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {
            await createPropinaSchema.validate(data)

            const Propina = await this.createPropinaUseCase.execute(data)
    
            
            res.status(201).json(Propina)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreatePropinaController }