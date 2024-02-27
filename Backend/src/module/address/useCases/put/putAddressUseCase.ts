import { updateAddressDto } from "../../repository/interface";
import { ServerError } from "../../../../error/index";
import { AddressRepository } from "../../repository/repository";

class PutAddressUseCase {
    constructor(private addressRepository: AddressRepository) { }

    async execute(data: updateAddressDto){

        try {
            return await this.addressRepository.update(data)
        } catch (error) {
            throw new ServerError("Falha ao criar a Address", 400);
        }
    }
}

export { PutAddressUseCase }