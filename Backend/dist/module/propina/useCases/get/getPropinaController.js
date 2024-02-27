"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPropinaController = void 0;
class GetPropinaController {
    constructor(getPropinaUseCase) {
        this.getPropinaUseCase = getPropinaUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const Propina = await this.getPropinaUseCase.execute(Number(id));
            res.status(201).json(Propina);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetPropinaController = GetPropinaController;
