"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMultaUseCase = void 0;
const index_1 = require("../../../../error/index");
class CreateMultaUseCase {
    constructor(multaRepository) {
        this.multaRepository = multaRepository;
    }
    async execute(data) {
        try {
            return await this.multaRepository.create(data);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Multa", 400);
        }
    }
}
exports.CreateMultaUseCase = CreateMultaUseCase;
