"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDescontoUseCase = void 0;
const index_1 = require("../../../../error/index");
class GetDescontoUseCase {
    constructor(DescontoRepository) {
        this.DescontoRepository = DescontoRepository;
    }
    async execute(id) {
        try {
            return await this.DescontoRepository.get(id);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Desconto", 400);
        }
    }
}
exports.GetDescontoUseCase = GetDescontoUseCase;
