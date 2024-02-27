import { Request, Response } from "express";
import { createAlunoSchema } from "../../../../config/yup";
import { CreateAlunoUseCase } from "./createAlunoUseCase";

class CreateAlunoController {
    constructor(private createAlunoUseCase: CreateAlunoUseCase) { }

    async handle(req: Request, res: Response) {
        const data = req.body

        try {
            await createAlunoSchema.validate(data)


            const Aluno = await this.createAlunoUseCase.execute(data)

            return res.status(201).json(Aluno)
        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { CreateAlunoController }