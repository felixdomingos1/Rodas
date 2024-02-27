import { Request, Response } from "express";
// import { GetAlunoSchema } from "../../../../config/yup";
import { GetAlunoUseCase } from "./getAlunoUseCase";

class GetAlunoController {
    constructor(private getAlunoUseCase: GetAlunoUseCase ) { }

    async handle(req: Request, res: Response ) {
        const { id } = req.params

        try {

            const Aluno = await this.getAlunoUseCase.execute(Number(id))
    
            res.status(201).json(Aluno)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { GetAlunoController }