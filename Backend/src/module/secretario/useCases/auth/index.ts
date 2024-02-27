import { SecretarioRepository } from "../../repository/repository";
import { AuthSecretarioController } from "./authSecretarioController";
import { AuthSecretarioUseCase } from "./authSecretarioUseCase";

const secretarioRepository = new SecretarioRepository()
const authSecretarioUseCase = new AuthSecretarioUseCase(secretarioRepository)
const authSecretario = new AuthSecretarioController(authSecretarioUseCase)

export { authSecretario }