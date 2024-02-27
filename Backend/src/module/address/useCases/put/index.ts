import { AddressRepository } from "../../repository/repository"
import { PutAddressUseCase } from "./putAddressUseCase"
import { PutAddressController } from "./putAddressController"

const addressRepository = new AddressRepository()
const putAddressUseCase = new PutAddressUseCase(addressRepository)
const PutAddress = new PutAddressController(putAddressUseCase)

export { PutAddress }