import { AlunoRepository } from "../../repository/repository"
import { CreateAlunoController } from "./createAlunoController"
import { CreateAlunoUseCase } from "./createAlunoUseCase"


const alunoRepository = new AlunoRepository()
const createAlunoUseCase = new CreateAlunoUseCase(alunoRepository)
const createAluno = new CreateAlunoController(createAlunoUseCase)

export { createAluno }