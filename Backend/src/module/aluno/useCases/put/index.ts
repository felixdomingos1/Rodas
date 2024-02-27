import { AlunoRepository } from "../../repository/repository"
import { CreateAlunoController } from "./putAlunoController"
import { CreateAlunoUseCase } from "./putAlunoUseCase"


const alunoRepository = new AlunoRepository()
const createAlunoUseCase = new CreateAlunoUseCase(alunoRepository)
const createAluno = new CreateAlunoController(createAlunoUseCase)

export { createAluno }