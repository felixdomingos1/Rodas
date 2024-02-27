import { PropinaRepository } from "../../repository/repository"
import { DeletePropinaUseCase } from "./DeletePropinaUseCase"
import { DeletePropinaController } from "./DeletePropinaController"

const propinaRepository = new PropinaRepository()
const deletePropinaUseCase = new DeletePropinaUseCase(propinaRepository)
const DeletePropina = new DeletePropinaController(deletePropinaUseCase)

export { DeletePropina }