"use strict";
// import { hash } from "bcrypt";
// import { ServerError } from "../../../../error/index";
// import { createCalendarioDto } from "../../repository/interface";
// import { CalendarioRepository } from "../../repository/repository";
// class CreateCalendarioUseCase {
//     constructor(private CalendarioRepository: CalendarioRepository) { }
//     async execute({ email,password, ...data}: createCalendarioDto){
//         const userExist = await this.CalendarioRepository.findByEmail(email)
//         if (userExist) {
//             throw new ServerError('Calendario já existe', 400)
//         }
//         password = await hash(password, 8)
//         return await this.CalendarioRepository.create({ email, password, ...data })
//     }
// }
// export { CreateCalendarioUseCase }
