import { GetPropinaUseCase } from "./getPropinaUseCase";
import { Request, Response } from "express";

class GetPropinaController {
    constructor(private getPropinaUseCase: GetPropinaUseCase ) { }

    async handle(req: Request, res: Response ) {
        const { id } = req.params

        try {

            const Propina = await this.getPropinaUseCase.execute(Number(id))
            
            res.status(201).json(Propina)

        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { GetPropinaController }