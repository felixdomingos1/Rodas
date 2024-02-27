import { PutPropinaUseCase } from "./putPropinaUseCase";
import { Request, Response } from "express";

class PutPropinaController {
    constructor(private putPropinaUseCase: PutPropinaUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { mainAdmin, ...data } = req.body


        try {

            if (!mainAdmin) {
                return res.status(400).json({ message:"Apenas a administradora pode actualizar as propinas"})
            }

            const Propina = await this.putPropinaUseCase.execute({id, ...req.body})

            return res.status(201).json(Propina)

        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { PutPropinaController }