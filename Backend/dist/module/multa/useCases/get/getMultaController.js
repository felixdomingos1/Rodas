"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultaController = void 0;
class GetMultaController {
    constructor(getMultaUseCase) {
        this.getMultaUseCase = getMultaUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const Multa = await this.getMultaUseCase.execute(Number(id));
            res.status(201).json(Multa);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetMultaController = GetMultaController;
