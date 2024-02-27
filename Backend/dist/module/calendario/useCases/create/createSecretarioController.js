"use strict";
// import { Request, Response } from "express";
// import { payLoadGenerator } from "../../../../config/payLoad";
// import { CreateCalendarioUseCase } from "./createSecretarioUseCase";
// // import { createCalendarioSchema } from "../../../../config/yup";
// class CreateCalendarioController {
//     constructor(private createCalendarioUseCase: CreateCalendarioUseCase ) { }
//     async handle(req: Request, res: Response ) {
//         const data = req.body
//         try {
//             console.log(data);
//             await createCalendarioSchema.validate(data)
//             const Calendario = await this.createCalendarioUseCase.execute(data)
//             const { email, id, mainAdmin } = Calendario
//             const token = payLoadGenerator({ email, id, mainAdmin })
//             res.status(201).json({
//                 Calendario,
//                 token
//             })
//         } catch (error: any) {
//             return res.status(400).json({message: error.message})
//         }
//     }
// }
// export { CreateCalendarioController }
