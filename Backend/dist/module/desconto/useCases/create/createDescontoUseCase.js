"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDescontoUseCase = void 0;
const index_1 = require("../../../../error/index");
class CreateDescontoUseCase {
    constructor(descontoRepository) {
        this.descontoRepository = descontoRepository;
    }
    async execute(data) {
        try {
            return await this.descontoRepository.create(data);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Desconto", 400);
        }
    }
}
exports.CreateDescontoUseCase = CreateDescontoUseCase;
