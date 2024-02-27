"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSecretarioUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const index_1 = require("../../../../error/index");
class CreateSecretarioUseCase {
    constructor(secretarioRepository) {
        this.secretarioRepository = secretarioRepository;
    }
    async execute({ email, password, ...data }) {
        const userExist = await this.secretarioRepository.findByEmail(email);
        if (userExist) {
            throw new index_1.ServerError('secretario já existe', 400);
        }
        password = await (0, bcrypt_1.hash)(password, 8);
        return await this.secretarioRepository.create({ email, password, ...data });
    }
}
exports.CreateSecretarioUseCase = CreateSecretarioUseCase;
