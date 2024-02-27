import { updatePropinaDto } from "../../repository/interface";
import { ServerError } from "../../../../error/index";
import { PropinaRepository } from "../../repository/repository";

class PutPropinaUseCase {
    constructor(private propinaRepository: PropinaRepository) { }

    async execute(data: updatePropinaDto){

        try {
            return await this.propinaRepository.update(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a propina", 400);
        }
    }
}

export { PutPropinaUseCase }