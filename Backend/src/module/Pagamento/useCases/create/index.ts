import { PagamentoRepository } from "../../repository/repository"
import { CreatePagamentoUseCase } from "./createPagamentoUseCase"
import { CreatePagamentoController } from "./createPagamentoController"
import { DescontoEfectuadosRepository } from "../../../DescontoEfectuados/repository/repository"


const pagamentoRepository = new PagamentoRepository()
const descontoEfectuadosRepository = new  DescontoEfectuadosRepository()
const createPagamentoUseCase = new CreatePagamentoUseCase(pagamentoRepository,descontoEfectuadosRepository)
const createPagamento = new CreatePagamentoController(createPagamentoUseCase)

export { createPagamento }