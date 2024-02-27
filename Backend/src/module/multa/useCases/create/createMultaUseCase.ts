import { ServerError } from "../../../../error/index";
import { createMultaDto } from "../../repository/interface";
import { MultaRepository } from "../../repository/repository";

class CreateMultaUseCase {
    constructor(private  multaRepository: MultaRepository) { }

    async execute(data: createMultaDto){

        try {
            return await this.multaRepository.create(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a Multa", 400);
        }
    }
}

export { CreateMultaUseCase }