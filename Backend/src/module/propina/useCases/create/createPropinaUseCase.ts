import { ServerError } from "../../../../error/index";
import { createPropinaDto } from "../../repository/interface";
import { PropinaRepository } from "../../repository/repository";

class CreatePropinaUseCase {
    constructor(private PropinaRepository: PropinaRepository) { }

    async execute(data: createPropinaDto){

        try {
            return await this.PropinaRepository.create(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a propina", 400);
        }
    }
}

export { CreatePropinaUseCase }