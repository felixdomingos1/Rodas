// import { updateAlunoDto } from "module/aluno/repository/interface";
// import { ServerError } from "../../../../error/index";
// import { AlunoRepository } from "../../repository/repository";

// class PutAlunoUseCase {
//     constructor(private alunoRepository: AlunoRepository) { }

//     async execute({ BI,dataNascimento, ...data}: updateAlunoDto){
//         const userExist =  await this.alunoRepository.findByBInumber(BI)

//         if (!userExist) {
//             throw new ServerError('Aluno não existe', 400)
//         }
//         if (dataNascimento) dataNascimento  = new Date(dataNascimento)
            
//         try {
//             return await this.alunoRepository.update({ BI,dataNascimento, ...data })
//         } catch (error: any) {
//             throw new ServerError(error.message, 400)
//         }
//     }
// }

// export { PutAlunoUseCase }