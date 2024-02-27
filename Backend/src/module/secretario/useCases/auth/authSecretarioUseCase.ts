import { compare } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { SecretarioRepository } from "../../repository/repository";
import { payLoadGenerator } from "../../../../config/payLoad";


interface authData {
    email: string,
    password: string
}

class AuthSecretarioUseCase {
    constructor(private secretarioRepository: SecretarioRepository) { }

    async execute({ email, password }: authData) {
        const secretario = await this.secretarioRepository.findByEmail(email) 

        if (!secretario) {
            throw new ServerError("email or password errado", 401);
        }

        const isEqual = await compare(password, secretario.password)
        
        if (!isEqual) {
            throw new ServerError("email or password errado", 401);
        }

        const {mainAdmin, id  } =secretario

        const token = payLoadGenerator({ email, mainAdmin, id})

        return  {
            secretario,
            token
        }
    }
}

export { AuthSecretarioUseCase }