"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAddressController = void 0;
class GetAddressController {
    constructor(getAddressUseCase) {
        this.getAddressUseCase = getAddressUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const Address = await this.getAddressUseCase.execute(Number(id));
            res.status(201).json(Address);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.GetAddressController = GetAddressController;
