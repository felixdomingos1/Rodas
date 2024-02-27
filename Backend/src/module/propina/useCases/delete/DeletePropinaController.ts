import { ServerError } from "../../../../error/index";
import { DeletePropinaUseCase } from "./DeletePropinaUseCase";
import { Request, Response } from "express";

class DeletePropinaController {
    constructor(private deletePropinaUseCase: DeletePropinaUseCase ) { }

    async handle(req: Request, res: Response ) {
        const { id } = req.params
        const { mainAdmin } = req.body

        try {

            if (!mainAdmin) {
                throw new ServerError("Apenas a administradora pode deletar propina", 400);
            }

            const Result = await this.deletePropinaUseCase.execute(Number(id))
            
            res.status(201).json(Result)

        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { DeletePropinaController }