"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPropinaController = void 0;
class PutPropinaController {
    constructor(putPropinaUseCase) {
        this.putPropinaUseCase = putPropinaUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { mainAdmin, userId, ...data } = req.body;
        try {
            if (!mainAdmin) {
                return res.status(400).json({ message: "Apenas a administradora pode actualizar as propinas" });
            }
            const Propina = await this.putPropinaUseCase.execute({ id, ...data });
            return res.status(201).json(Propina);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.PutPropinaController = PutPropinaController;
