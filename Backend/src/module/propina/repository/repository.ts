import { prisma } from "../../../config/prisma";
import { PropinarepositoryDto, createPropinaDto, updatePropinaDto } from "./interface";
import { Propina } from "@prisma/client";

class PropinaRepository implements PropinarepositoryDto {
    async create(data: createPropinaDto): Promise<Propina> {
        return await prisma.propina.create({ data })
    }


    async get(id: number): Promise<Propina | Propina[] | null> {
        if (!id) {
            return await prisma.propina.findMany()
        }
        return await prisma.propina.findFirst({ where: { id } })
    }

    async update({ id, userId,...data}: updatePropinaDto): Promise<Boolean > {
        await prisma.propina.update({ where: { id  }, data })
        return true

    }
    async delete(id: number): Promise<Boolean> {
        await prisma.propina.delete({ where: { id } })

        return true
    }
}

export { PropinaRepository }