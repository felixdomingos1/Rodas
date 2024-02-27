import { SecretarioRepository } from "../../repository/repository"
import { GetSecretarioController } from "./getSecretarioController"
import { GetSecretarioUseCase } from "./getSecretarioUseCase"


const secretarioRepository = new SecretarioRepository()
const getSecretarioUseCase = new GetSecretarioUseCase(secretarioRepository)
const getSecretario = new GetSecretarioController(getSecretarioUseCase)

export { getSecretario }