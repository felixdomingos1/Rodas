"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlunoController = void 0;
class GetAlunoController {
    constructor(getAlunoUseCase) {
        this.getAlunoUseCase = getAlunoUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const Aluno = await this.getAlunoUseCase.execute(Number(id));
            res.status(201).json(Aluno);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetAlunoController = GetAlunoController;
