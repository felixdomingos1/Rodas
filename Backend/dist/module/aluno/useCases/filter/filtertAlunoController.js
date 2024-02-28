"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterAlunoController = void 0;
class FilterAlunoController {
    constructor(filterAlunoUseCase) {
        this.filterAlunoUseCase = filterAlunoUseCase;
    }
    async handle(req, res) {
        const { BI } = req.params;
        try {
            const Aluno = await this.filterAlunoUseCase.execute(BI);
            res.status(201).json(Aluno);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.FilterAlunoController = FilterAlunoController;
