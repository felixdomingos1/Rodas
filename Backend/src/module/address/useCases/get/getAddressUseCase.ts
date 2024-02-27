import { ServerError } from "../../../../error/index";
import { AddressRepository } from "../../repository/repository";

class GetAddressUseCase {
    constructor(private AddressRepository: AddressRepository) { }

    async execute(id: number){

        try {
            return await this.AddressRepository.get(id)
        } catch (error) {
            throw new ServerError("Falha ao criar a Address", 400);
        }
    }
}

export { GetAddressUseCase }