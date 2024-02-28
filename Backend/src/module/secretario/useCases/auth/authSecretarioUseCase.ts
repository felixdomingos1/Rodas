import { compare, hash } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { SecretarioRepository } from "../../repository/repository";
import { payLoadGenerator } from "../../../../config/payLoad";
import { Secretario } from "@prisma/client";


interface authData {
    email: string,
    password: string
}

class AuthSecretarioUseCase {
    constructor(private secretarioRepository: SecretarioRepository) { }

    async execute({ email, password }: authData) {
        const naoTemSecretario = await this.secretarioRepository.get(0) as []

        let secretario;
        
        if (!naoTemSecretario.length) {
          secretario =  await this.secretarioRepository.create({
               nomeCompleto:"Joao Meti",
               email:"f@gmail.com",
               mainAdmin:true,
               password: await hash("123456", 8)
            })
        }
         secretario = await this.secretarioRepository.findByEmail(email) as Secretario
        
        if (!secretario["password"]) {
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