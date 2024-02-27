"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDescontoController = void 0;
class GetDescontoController {
    constructor(getDescontoUseCase) {
        this.getDescontoUseCase = getDescontoUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const Desconto = await this.getDescontoUseCase.execute(Number(id));
            res.status(201).json(Desconto);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetDescontoController = GetDescontoController;
