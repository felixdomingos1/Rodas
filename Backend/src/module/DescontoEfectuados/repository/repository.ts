import { prisma } from "../../../config/prisma";
import { DescontoEfectuadosrepositoryDto, createDescontoEfectuadosDto } from "./interface";
import { DescontoEfectuados } from "@prisma/client";

class DescontoEfectuadosRepository implements DescontoEfectuadosrepositoryDto {
    async create(data: createDescontoEfectuadosDto): Promise<DescontoEfectuados> {
        return await prisma.descontoEfectuados.create({ data })
    }


    // async get(id: number): Promise<DescontoEfectuados | DescontoEfectuados[] | null> {
    //     if (!id) {
    //         return await prisma.descontoEfectuados.findMany()
    //     }
    //     return await prisma.descontoEfectuados.findFirst({ where: { id } })
    // }

    // async update({ id,...data}: updateDescontoEfectuadosDto): Promise<Boolean > {
    //     await prisma.descontoEfectuados.update({ where: { id  }, data })
    //     return true

    // // }
    // async delete(id: number): Promise<Boolean> {
    //     await prisma.descontoEfectuados.delete({ where: { id } })

    //     return true
    // }
}

export { DescontoEfectuadosRepository }