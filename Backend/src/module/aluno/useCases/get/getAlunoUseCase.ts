import { ServerError } from "../../../../error/index";
// import { GetAlunoDto } from "../../repository/interface";
import { AlunoRepository } from "../../repository/repository";

class GetAlunoUseCase {
    constructor(private alunoRepository: AlunoRepository) { }

    async execute(id: number){

        return await this.alunoRepository.get(id)
    }
}

export { GetAlunoUseCase }