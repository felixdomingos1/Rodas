import { MultaRepository } from "../../repository/repository"
import { GetMultaUseCase } from "./getMultaUseCase"
import { GetMultaController } from "./getMultaController"

const multaRepository = new MultaRepository()
const getMultaUseCase = new GetMultaUseCase(multaRepository)
const getMulta = new GetMultaController(getMultaUseCase)

export { getMulta }