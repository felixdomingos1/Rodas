"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPropinaUseCase = void 0;
const index_1 = require("../../../../error/index");
class PutPropinaUseCase {
    constructor(propinaRepository) {
        this.propinaRepository = propinaRepository;
    }
    async execute(data) {
        try {
            return await this.propinaRepository.update(data);
        }
        catch (error) {
            throw new index_1.ServerError(error.message, 400);
        }
    }
}
exports.PutPropinaUseCase = PutPropinaUseCase;
