import { DescontoEfectuadosRepository } from "../../repository/repository"
import { CreateDescontoEfectuadosController } from "./createDescontoEfectuadosController"
import { CreateDescontoEfectuadosUseCase } from "./createDescontoEfectuadosUseCase"


const descontoEfectuadosRepository = new DescontoEfectuadosRepository()
const createDescontoEfectuadosUseCase = new CreateDescontoEfectuadosUseCase(descontoEfectuadosRepository)
const createDescontoEfectuados = new CreateDescontoEfectuadosController(createDescontoEfectuadosUseCase)

export { createDescontoEfectuados }