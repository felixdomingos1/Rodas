"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoController = void 0;
const yup_1 = require("../../../../config/yup");
class CreatePagamentoController {
    constructor(createPagamentoUseCase) {
        this.createPagamentoUseCase = createPagamentoUseCase;
    }
    async handle(req, res) {
        const { mainAdmin, ...data } = req.body;
        try {
            await yup_1.createPagamentoSchema.validate(data);
            const Pagamento = await this.createPagamentoUseCase.execute(data);
            res.status(201).json(Pagamento);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreatePagamentoController = CreatePagamentoController;
