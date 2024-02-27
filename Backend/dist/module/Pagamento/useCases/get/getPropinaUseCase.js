"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagamentoUseCase = void 0;
const index_1 = require("../../../../error/index");
class GetPagamentoUseCase {
    constructor(PagamentoRepository) {
        this.PagamentoRepository = PagamentoRepository;
    }
    async execute(numeroDeFactura) {
        console.log(numeroDeFactura);
        try {
            return await this.PagamentoRepository.get(numeroDeFactura);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Pagamento", 400);
        }
    }
}
exports.GetPagamentoUseCase = GetPagamentoUseCase;
