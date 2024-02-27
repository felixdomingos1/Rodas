import { ServerError } from "../../../../error/index";
import { PropinaRepository } from "../../repository/repository";

class GetPropinaUseCase {
    constructor(private PropinaRepository: PropinaRepository) { }

    async execute(id: number){

        try {
            return await this.PropinaRepository.get(id)
        } catch (error) {
            throw new ServerError("Falha ao criar a propina", 400);
        }
    }
}

export { GetPropinaUseCase }