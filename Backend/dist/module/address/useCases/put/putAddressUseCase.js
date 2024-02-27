"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAddressUseCase = void 0;
const index_1 = require("../../../../error/index");
class PutAddressUseCase {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async execute(data) {
        try {
            return await this.addressRepository.update(data);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Address", 400);
        }
    }
}
exports.PutAddressUseCase = PutAddressUseCase;
