import { SecretarioRepository } from "../../repository/repository"
import { CreateSecretarioUseCase } from "./createSecretarioUseCase"
import { CreateSecretarioController } from "./createSecretarioController"

const secretarioRepository = new SecretarioRepository()
const createSecretarioUseCase = new CreateSecretarioUseCase(secretarioRepository)
const createSecretario = new CreateSecretarioController(createSecretarioUseCase)

export { createSecretario }