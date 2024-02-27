import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { createSecretarioDto } from "../../repository/interface";
import { SecretarioRepository } from "../../repository/repository";

class CreateSecretarioUseCase {
    constructor(private secretarioRepository: SecretarioRepository) { }

    async execute({ email,password, ...data}: createSecretarioDto){
        const userExist = await this.secretarioRepository.findByEmail(email)

        if (userExist) {
            throw new ServerError('secretario já existe', 400)
        }

        password = await hash(password, 8)

        return await this.secretarioRepository.create({ email, password, ...data })
    }
}

export { CreateSecretarioUseCase }