import { AddressRepository } from "../../repository/repository"
import { GetAddressUseCase } from "./getAddressUseCase"
import { GetAddressController } from "./getAddressController"

const addressRepository = new AddressRepository()
const getAddressUseCase = new GetAddressUseCase(addressRepository)
const getAddress = new GetAddressController(getAddressUseCase)

export { getAddress }