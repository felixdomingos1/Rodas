"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAddressUseCase = void 0;
const index_1 = require("../../../../error/index");
class GetAddressUseCase {
    constructor(AddressRepository) {
        this.AddressRepository = AddressRepository;
    }
    async execute(id) {
        try {
            return await this.AddressRepository.get(id);
        }
        catch (error) {
            throw new index_1.ServerError("Falha ao criar a Address", 400);
        }
    }
}
exports.GetAddressUseCase = GetAddressUseCase;
