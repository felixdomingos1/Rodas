import { ServerError } from "../../../../error/index";
import { createDescontoDto } from "../../repository/interface";
import { DescontoRepository } from "../../repository/repository";

class CreateDescontoUseCase {
    constructor(private descontoRepository: DescontoRepository) { }

    async execute(data: createDescontoDto){

        try {
            return await this.descontoRepository.create(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a Desconto", 400);
        }
    }
}

export { CreateDescontoUseCase }