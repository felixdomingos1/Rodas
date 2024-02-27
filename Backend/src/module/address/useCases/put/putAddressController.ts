import { PutAddressUseCase } from "./putAddressUseCase";
import { Request, Response } from "express";

class PutAddressController {
    constructor(private putAddressUseCase: PutAddressUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { mainAdmin, ...data } = req.body


        try {

            if (!mainAdmin) {
                return res.status(400).json({ message:"Apenas a administradora pode actualizar as Addresss"})
            }

            const Address = await this.putAddressUseCase.execute({id, ...req.body})

            return res.status(201).json(Address)

        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { PutAddressController }