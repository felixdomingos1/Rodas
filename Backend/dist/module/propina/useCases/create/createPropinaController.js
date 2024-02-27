"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePropinaController = void 0;
const yup_1 = require("../../../../config/yup");
class CreatePropinaController {
    constructor(createPropinaUseCase) {
        this.createPropinaUseCase = createPropinaUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            await yup_1.createPropinaSchema.validate(data);
            const Propina = await this.createPropinaUseCase.execute(data);
            res.status(201).json(Propina);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreatePropinaController = CreatePropinaController;
