"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterAlunoUseCase = void 0;
class FilterAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async execute(BI) {
        return await this.alunoRepository.findByBInumber(BI);
    }
}
exports.FilterAlunoUseCase = FilterAlunoUseCase;
