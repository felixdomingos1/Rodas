import { ServerError } from "../../../../error/index";
import { MultaRepository } from "../../repository/repository";

class GetMultaUseCase {
    constructor(private MultaRepository: MultaRepository) { }

    async execute(id: number){

        try {
            return await this.MultaRepository.get(id)
        } catch (error) {
            throw new ServerError("Falha ao criar a Multa", 400);
        }
    }
}

export { GetMultaUseCase }