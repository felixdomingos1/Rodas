"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultaUseCase = void 0;
const index_1 = require("../../../../error/index");
class GetMultaUseCase {
    constructor(MultaRepository) {
        this.MultaRepository = MultaRepository;
    }
    async execute(id) {
        try {
            return await this.MultaRepository.get(id);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Multa", 400);
        }
    }
}
exports.GetMultaUseCase = GetMultaUseCase;
