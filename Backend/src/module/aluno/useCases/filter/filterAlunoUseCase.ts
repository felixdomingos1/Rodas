import { AlunoRepository } from "../../repository/repository";

class FilterAlunoUseCase {
    constructor(private alunoRepository: AlunoRepository) { }

    async execute(BI: string){

        return await this.alunoRepository.findByBInumber(BI)
    }
}

export { FilterAlunoUseCase }