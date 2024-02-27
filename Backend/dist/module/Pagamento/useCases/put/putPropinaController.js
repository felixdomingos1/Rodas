"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPagamentoController = void 0;
class PutPagamentoController {
    constructor(putPagamentoUseCase) {
        this.putPagamentoUseCase = putPagamentoUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { mainAdmin, ...data } = req.body;
        try {
            if (!mainAdmin) {
                return res.status(400).json({ message: "Apenas a administradora pode actualizar as Pagamentos" });
            }
            const Pagamento = await this.putPagamentoUseCase.execute({ id, ...req.body });
            return res.status(201).json(Pagamento);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.PutPagamentoController = PutPagamentoController;
