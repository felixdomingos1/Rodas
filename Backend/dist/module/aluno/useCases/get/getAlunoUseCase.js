"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlunoUseCase = void 0;
class GetAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async execute(id) {
        return await this.alunoRepository.get(id);
    }
}
exports.GetAlunoUseCase = GetAlunoUseCase;
