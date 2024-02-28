import { AlunoRepository } from "../../repository/repository"
import { FilterAlunoController } from "./filtertAlunoController"
import { FilterAlunoUseCase } from "./filterAlunoUseCase"


const alunoRepository = new AlunoRepository()
const filterAlunoUseCase = new FilterAlunoUseCase(alunoRepository)
const FilterAluno = new FilterAlunoController(filterAlunoUseCase)

export { FilterAluno }