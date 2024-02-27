import { DescontoRepository } from "../../repository/repository"
import { GetDescontoUseCase } from "./getDescontoUseCase"
import { GetDescontoController } from "./getDescontoController"

const descontoRepository = new DescontoRepository()
const getDescontoUseCase = new GetDescontoUseCase(descontoRepository)
const getDesconto = new GetDescontoController(getDescontoUseCase)

export { getDesconto }