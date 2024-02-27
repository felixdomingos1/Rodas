import { DescontoRepository } from "../../repository/repository"
import { PutDescontoController } from "./putDescontoController"
import { PutDescontoUseCase } from "./putPropinaUseCase"

const descontoRepository = new DescontoRepository()
const putDescontoUseCase = new PutDescontoUseCase(descontoRepository)
const PutDesconto = new PutDescontoController(putDescontoUseCase)

export { PutDesconto }