"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAddressController = void 0;
class PutAddressController {
    constructor(putAddressUseCase) {
        this.putAddressUseCase = putAddressUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { mainAdmin, ...data } = req.body;
        try {
            if (!mainAdmin) {
                return res.status(400).json({ message: "Apenas a administradora pode actualizar as Addresss" });
            }
            const Address = await this.putAddressUseCase.execute({ id, ...req.body });
            return res.status(201).json(Address);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.PutAddressController = PutAddressController;
