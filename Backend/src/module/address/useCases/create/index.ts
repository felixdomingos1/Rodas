import { AddressRepository } from "../../repository/repository"
import { CreateAddressUseCase } from "./createAddressUseCase"
import { CreateAddressController } from "./createAddressController"

const addressRepository = new AddressRepository()
const createAddressUseCase = new CreateAddressUseCase(addressRepository)
const createAddress = new CreateAddressController(createAddressUseCase)

export { createAddress }