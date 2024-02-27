import { MultaRepository } from "../../repository/repository"
import { CreateMultaUseCase } from "./createMultaUseCase"
import { CreateMultaController } from "./createMultaController"

const multaRepository = new MultaRepository()
const createMultaUseCase = new CreateMultaUseCase(multaRepository)
const createMulta = new CreateMultaController(createMultaUseCase)

export { createMulta }