import { GetMultaUseCase } from "./getMultaUseCase";
import { Request, Response } from "express";

class GetMultaController {
    constructor(private getMultaUseCase: GetMultaUseCase ) { }

    async handle(req: Request, res: Response ) {
        const { id } = req.params

        try {

            const Multa = await this.getMultaUseCase.execute(Number(id))
            
            res.status(201).json(Multa)

        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { GetMultaController }