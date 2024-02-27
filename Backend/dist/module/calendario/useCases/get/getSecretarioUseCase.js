"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCalendarioUseCase = void 0;
class GetCalendarioUseCase {
    constructor(calendarioRepository) {
        this.calendarioRepository = calendarioRepository;
    }
    async execute(id) {
        return await this.calendarioRepository.get(id);
    }
}
exports.GetCalendarioUseCase = GetCalendarioUseCase;
