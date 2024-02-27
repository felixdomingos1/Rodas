"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoUseCase = void 0;
const index_1 = require("../../../../error/index");
class CreatePagamentoUseCase {
    constructor(PagamentoRepository) {
        this.PagamentoRepository = PagamentoRepository;
    }
    async execute(data) {
        try {
            return await this.PagamentoRepository.create(data);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Pagamento", 400);
        }
    }
}
exports.CreatePagamentoUseCase = CreatePagamentoUseCase;
