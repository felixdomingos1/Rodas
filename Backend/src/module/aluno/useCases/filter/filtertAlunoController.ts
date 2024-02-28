import { Request, Response } from "express";
// import { FilterAlunoSchema } from "../../../../config/yup";
import { FilterAlunoUseCase } from "./filterAlunoUseCase";

class FilterAlunoController {
    constructor(private filterAlunoUseCase: FilterAlunoUseCase ) { }

    async handle(req: Request, res: Response ) {
        const { BI } = req.params

        try {

            const Aluno = await this.filterAlunoUseCase.execute(BI)
    
            res.status(201).json(Aluno)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { FilterAlunoController }