"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSecretarioUseCase = void 0;
class GetSecretarioUseCase {
    constructor(SecretarioRepository) {
        this.SecretarioRepository = SecretarioRepository;
    }
    async execute(id) {
        return await this.SecretarioRepository.get(id);
    }
}
exports.GetSecretarioUseCase = GetSecretarioUseCase;
