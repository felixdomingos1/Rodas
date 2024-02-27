import { CalendarioRepository } from "../../repository/repository";

class GetCalendarioUseCase {
    constructor(private calendarioRepository: CalendarioRepository) { }

    async execute(id: number ){

        return await this.calendarioRepository.get(id)
    }
}

export { GetCalendarioUseCase }