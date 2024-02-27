"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoController = void 0;
class CreatePagamentoController {
    constructor(createPagamentoUseCase) {
        this.createPagamentoUseCase = createPagamentoUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            // await createPagamentoSchema.validate(data)
            // const Pagamento = await this.createPagamentoUseCase.execute(data)
            res.status(201).json(data);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreatePagamentoController = CreatePagamentoController;
