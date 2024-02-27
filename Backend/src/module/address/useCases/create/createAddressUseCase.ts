import { ServerError } from "../../../../error/index";
import { createAddressDto } from "../../repository/interface";
import { AddressRepository } from "../../repository/repository";

class CreateAddressUseCase {
    constructor(private addressRepository: AddressRepository) { }

    async execute(data: createAddressDto){

        try {
            return await this.addressRepository.create(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a Address", 400);
        }
    }
}

export { CreateAddressUseCase }