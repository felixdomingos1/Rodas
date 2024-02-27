import { PropinaRepository } from "../../repository/repository"
import { PutPropinaUseCase } from "./putPropinaUseCase"
import { PutPropinaController } from "./putPropinaController"

const propinaRepository = new PropinaRepository()
const putPropinaUseCase = new PutPropinaUseCase(propinaRepository)
const PutPropina = new PutPropinaController(putPropinaUseCase)

export { PutPropina }