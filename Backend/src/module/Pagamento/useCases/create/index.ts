import { PagamentoRepository } from "../../repository/repository"
import { CreatePagamentoUseCase } from "./createPagamentoUseCase"
import { CreatePagamentoController } from "./createPagamentoController"
import { CalendarioRepository } from "../../../calendario/repository/repository"


const pagamentoRepository = new PagamentoRepository()
const calendarioRepository = new CalendarioRepository()
const createPagamentoUseCase = new CreatePagamentoUseCase(pagamentoRepository,calendarioRepository)
const createPagamento = new CreatePagamentoController(createPagamentoUseCase)

export { createPagamento }