"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMultaController = void 0;
const yup_1 = require("../../../../config/yup");
class CreateMultaController {
    constructor(createMultaUseCase) {
        this.createMultaUseCase = createMultaUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            await yup_1.createPropinaSchema.validate(data);
            const Multa = await this.createMultaUseCase.execute(data);
            res.status(201).json(Multa);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreateMultaController = CreateMultaController;
