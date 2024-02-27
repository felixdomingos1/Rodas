"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDescontoEfectuadosUseCase = void 0;
const index_1 = require("../../../../error/index");
class CreateDescontoEfectuadosUseCase {
    constructor(DescontoEfectuadosEfectuadosRepository) {
        this.DescontoEfectuadosEfectuadosRepository = DescontoEfectuadosEfectuadosRepository;
    }
    async execute(data) {
        try {
            return await this.DescontoEfectuadosEfectuadosRepository.create(data);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a DescontoEfectuados", 400);
        }
    }
}
exports.CreateDescontoEfectuadosUseCase = CreateDescontoEfectuadosUseCase;
