import { CreateAddressUseCase } from "./createAddressUseCase";
import { Request, Response } from "express";
import { createAddressSchema } from "../../../../config/yup";

class CreateAddressController {
    constructor(private createAddressUseCase: CreateAddressUseCase ) { }

    async handle(req: Request, res: Response ) {
        const data = req.body

        try {
            await createAddressSchema.validate(data)

            const Address = await this.createAddressUseCase.execute(data)
    
            
            res.status(201).json(Address)
        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { CreateAddressController }