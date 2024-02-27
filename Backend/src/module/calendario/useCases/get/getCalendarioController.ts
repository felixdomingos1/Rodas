import { Request, Response } from "express";
import { GetCalendarioUseCase } from "./getCalendarioUseCase";

class GetCalendarioController {
    constructor(private getCalendarioUseCase: GetCalendarioUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        try {


            const Calendario = await this.getCalendarioUseCase.execute(Number(id))


            res.status(201).json({ Calendario })
        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { GetCalendarioController }