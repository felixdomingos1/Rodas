"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDescontoController = void 0;
class PutDescontoController {
    constructor(putDescontoUseCase) {
        this.putDescontoUseCase = putDescontoUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { mainAdmin, userId, ...data } = req.body;
        try {
            if (!mainAdmin) {
                return res.status(400).json({ message: "Apenas a administradora pode actualizar as Descontos" });
            }
            const Desconto = await this.putDescontoUseCase.execute({ id, ...data });
            return res.status(201).json(Desconto);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.PutDescontoController = PutDescontoController;
