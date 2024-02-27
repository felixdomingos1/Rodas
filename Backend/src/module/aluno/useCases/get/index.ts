import { AlunoRepository } from "../../repository/repository"
import { GetAlunoController } from "./getAlunoController"
import { GetAlunoUseCase } from "./getAlunoUseCase"


const alunoRepository = new AlunoRepository()
const getAlunoUseCase = new GetAlunoUseCase(alunoRepository)
const getAluno = new GetAlunoController(getAlunoUseCase)

export { getAluno }