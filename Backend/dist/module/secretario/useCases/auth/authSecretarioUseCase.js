"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSecretarioUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const index_1 = require("../../../../error/index");
const payLoad_1 = require("../../../../config/payLoad");
class AuthSecretarioUseCase {
    constructor(secretarioRepository) {
        this.secretarioRepository = secretarioRepository;
    }
    async execute({ email, password }) {
        const naoTemSecretario = await this.secretarioRepository.get(0);
        let secretario;
        if (!naoTemSecretario.length) {
            secretario = await this.secretarioRepository.create({
                nomeCompleto: "Joao Meti",
                email: "f@gmail.com",
                mainAdmin: true,
                password: await (0, bcrypt_1.hash)("123456", 8)
            });
        }
        secretario = await this.secretarioRepository.findByEmail(email);
        if (!secretario["password"]) {
            throw new index_1.ServerError("email or password errado", 401);
        }
        const isEqual = await (0, bcrypt_1.compare)(password, secretario.password);
        if (!isEqual) {
            throw new index_1.ServerError("email or password errado", 401);
        }
        const { mainAdmin, id } = secretario;
        const token = (0, payLoad_1.payLoadGenerator)({ email, mainAdmin, id });
        return {
            secretario,
            token
        };
    }
}
exports.AuthSecretarioUseCase = AuthSecretarioUseCase;
