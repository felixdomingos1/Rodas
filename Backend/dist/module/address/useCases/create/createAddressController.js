"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressController = void 0;
const yup_1 = require("../../../../config/yup");
class CreateAddressController {
    constructor(createAddressUseCase) {
        this.createAddressUseCase = createAddressUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            await yup_1.createAddressSchema.validate(data);
            const Address = await this.createAddressUseCase.execute(data);
            res.status(201).json(Address);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreateAddressController = CreateAddressController;
