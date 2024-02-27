import { GetAddressUseCase } from "./getAddressUseCase";
import { Request, Response } from "express";

class GetAddressController {
    constructor(private getAddressUseCase: GetAddressUseCase ) { }

    async handle(req: Request, res: Response ) {
        const { id } = req.params

        try {

            const Address = await this.getAddressUseCase.execute(Number(id))
            
            res.status(201).json(Address)

        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { GetAddressController }