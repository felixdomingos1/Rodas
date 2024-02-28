// import { Request, Response } from "express";
// import { PutAlunoUseCase } from "./putAlunoUseCase";
// import { Aluno } from "@prisma/client";
// import { ServerError } from "../../../../error";

// class PutAlunoController {
//     constructor(private PutAlunoUseCase: PutAlunoUseCase) { }

//     async handle(req: Request, res: Response) {
//         const data = req.body as Aluno

//         try {
//             if (!data.BI) {
//                 throw new ServerError("numero do BI é obrigatório", 400);
//             }

//             const Aluno = await this.PutAlunoUseCase.execute(data)

//             res.status(201).json(Aluno)
//         } catch (error: any) {
//             return res.status(400).json({ message: error.message })
//         }
//     }
// }

// export { PutAlunoController }