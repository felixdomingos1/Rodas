import { DescontoRepository } from "../../repository/repository"
import { CreateDescontoUseCase } from "./createDescontoUseCase"
import { CreateDescontoController } from "./createDescontoController"

const descontoRepository = new DescontoRepository()
const createDescontoUseCase = new CreateDescontoUseCase(descontoRepository)
const createDesconto = new CreateDescontoController(createDescontoUseCase)

export { createDesconto }