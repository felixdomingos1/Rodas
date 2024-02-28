"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePropinaController = void 0;
const index_1 = require("../../../../error/index");
class DeletePropinaController {
    constructor(deletePropinaUseCase) {
        this.deletePropinaUseCase = deletePropinaUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { mainAdmin } = req.body;
        try {
            if (!mainAdmin) {
                throw new index_1.ServerError("Apenas a administradora pode deletar propina", 400);
            }
            const Result = await this.deletePropinaUseCase.execute(Number(id));
            res.status(201).json(Result);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.DeletePropinaController = DeletePropinaController;
