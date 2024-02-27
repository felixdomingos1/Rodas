import { ServerError } from "../../../../error/index";
import { PropinaRepository } from "../../repository/repository";

class DeletePropinaUseCase {
    constructor(private PropinaRepository: PropinaRepository) { }

    async execute(id: number){

        try {
            return await this.PropinaRepository.delete(id)
        } catch (error) {
            throw new ServerError("Falha ao deletar a propina", 400);
        }
    }
}

export { DeletePropinaUseCase }