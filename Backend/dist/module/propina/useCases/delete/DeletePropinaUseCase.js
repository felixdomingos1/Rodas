"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePropinaUseCase = void 0;
const index_1 = require("../../../../error/index");
class DeletePropinaUseCase {
    constructor(PropinaRepository) {
        this.PropinaRepository = PropinaRepository;
    }
    async execute(id) {
        try {
            return await this.PropinaRepository.delete(id);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao deletar a propina", 400);
        }
    }
}
exports.DeletePropinaUseCase = DeletePropinaUseCase;
