"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCalendarioController = void 0;
class GetCalendarioController {
    constructor(getCalendarioUseCase) {
        this.getCalendarioUseCase = getCalendarioUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const Calendario = await this.getCalendarioUseCase.execute(Number(id));
            res.status(201).json({ Calendario });
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetCalendarioController = GetCalendarioController;
