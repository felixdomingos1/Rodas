import { PropinaRepository } from "../../repository/repository"
import { CreatePropinaUseCase } from "./createPropinaUseCase"
import { CreatePropinaController } from "./createPropinaController"

const propinaRepository = new PropinaRepository()
const createPropinaUseCase = new CreatePropinaUseCase(propinaRepository)
const createPropina = new CreatePropinaController(createPropinaUseCase)

export { createPropina }