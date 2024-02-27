import { DescontoEfectuadosRepository } from "../../repository/repository";
import { ServerError } from "../../../../error/index";
import { createDescontoEfectuadosDto } from "../../repository/interface";


class CreateDescontoEfectuadosUseCase {
    constructor(private DescontoEfectuadosEfectuadosRepository: DescontoEfectuadosRepository) { }

    async execute(data: createDescontoEfectuadosDto){

        try {
            return await this.DescontoEfectuadosEfectuadosRepository.create(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a DescontoEfectuados", 400);
        }
    }
}

export { CreateDescontoEfectuadosUseCase }