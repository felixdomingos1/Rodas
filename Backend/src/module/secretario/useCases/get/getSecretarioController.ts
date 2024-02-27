import { Request, Response } from "express";
import { GetSecretarioUseCase } from "./getSecretarioUseCase";

class GetSecretarioController {
    constructor(private getSecretarioUseCase: GetSecretarioUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        try {
            const Secretario = await this.getSecretarioUseCase.execute(Number(id))


            res.status(201).json({ Secretario })
        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { GetSecretarioController }