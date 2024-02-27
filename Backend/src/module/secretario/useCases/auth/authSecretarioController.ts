import { AuthSecretarioUseCase } from "./authSecretarioUseCase";
import { Request, Response  } from "express";
import * as yup from 'yup'

class AuthSecretarioController {
    constructor(private authSecretarioUseCase: AuthSecretarioUseCase) { }

    async handle(req: Request, res: Response ) {
        const authSchema = yup.object({
            email: yup.string().required("email é obrigatório"),
            password: yup.string().required("password é obrigatório")
        })

        try {
            await authSchema.validate(req.body)

             const result = await this.authSecretarioUseCase.execute(req.body)

             return res.status(200).json(result)

        } catch (error: any) {
            return res.status(400).json({ message: error.message})
        }
    }
}

export { AuthSecretarioController }