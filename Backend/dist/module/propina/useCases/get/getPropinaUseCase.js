"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPropinaUseCase = void 0;
const index_1 = require("../../../../error/index");
class GetPropinaUseCase {
    constructor(PropinaRepository) {
        this.PropinaRepository = PropinaRepository;
    }
    async execute(id) {
        try {
            return await this.PropinaRepository.get(id);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a propina", 400);
        }
    }
}
exports.GetPropinaUseCase = GetPropinaUseCase;
