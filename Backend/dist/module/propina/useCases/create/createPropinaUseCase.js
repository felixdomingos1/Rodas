"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePropinaUseCase = void 0;
const index_1 = require("../../../../error/index");
class CreatePropinaUseCase {
    constructor(PropinaRepository) {
        this.PropinaRepository = PropinaRepository;
    }
    async execute(data) {
        try {
            return await this.PropinaRepository.create(data);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a propina", 400);
        }
    }
}
exports.CreatePropinaUseCase = CreatePropinaUseCase;
