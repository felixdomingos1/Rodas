"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagamentoController = void 0;
class GetPagamentoController {
    constructor(getPagamentoUseCase) {
        this.getPagamentoUseCase = getPagamentoUseCase;
    }
    async handle(req, res) {
        const { numeroDeFactura } = req.params;
        try {
            const Pagamento = await this.getPagamentoUseCase.execute(numeroDeFactura);
            res.status(201).json(Pagamento);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetPagamentoController = GetPagamentoController;
