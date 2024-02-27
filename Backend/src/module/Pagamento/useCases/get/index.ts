import { PagamentoRepository } from "../../repository/repository"
import { GetPagamentoController } from "./getPagamentoController"
import { GetPagamentoUseCase } from "./getPagamentoUseCase"


const pagamentoRepository = new PagamentoRepository()
const getPagamentoUseCase = new GetPagamentoUseCase(pagamentoRepository)
const getPagamento = new GetPagamentoController(getPagamentoUseCase)

export { getPagamento }