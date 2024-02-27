"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlunoController = void 0;
const yup_1 = require("../../../../config/yup");
class CreateAlunoController {
    constructor(createAlunoUseCase) {
        this.createAlunoUseCase = createAlunoUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            await yup_1.createAlunoSchema.validate(data);
            const Aluno = await this.createAlunoUseCase.execute(data);
            return res.status(201).json(Aluno);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreateAlunoController = CreateAlunoController;
