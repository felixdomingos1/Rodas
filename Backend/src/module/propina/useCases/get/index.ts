import { PropinaRepository } from "../../repository/repository"
import { GetPropinaUseCase } from "./getPropinaUseCase"
import { GetPropinaController } from "./getPropinaController"

const propinaRepository = new PropinaRepository()
const getPropinaUseCase = new GetPropinaUseCase(propinaRepository)
const getPropina = new GetPropinaController(getPropinaUseCase)

export { getPropina }