"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSecretarioController = void 0;
class GetSecretarioController {
    constructor(getSecretarioUseCase) {
        this.getSecretarioUseCase = getSecretarioUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const Secretario = await this.getSecretarioUseCase.execute(Number(id));
            res.status(201).json(Secretario);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetSecretarioController = GetSecretarioController;
