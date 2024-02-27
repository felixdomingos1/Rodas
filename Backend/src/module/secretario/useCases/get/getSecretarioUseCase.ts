import { SecretarioRepository } from "../../repository/repository";

class GetSecretarioUseCase {
    constructor(private SecretarioRepository: SecretarioRepository) { }

    async execute(id: number ){

        return await this.SecretarioRepository.get(id)
    }
}

export { GetSecretarioUseCase }