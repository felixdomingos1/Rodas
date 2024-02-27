import { prisma } from "../../../config/prisma";
import { MultarepositoryDto, createMultaDto, updateMultaDto } from "./interface";
import { Multa } from "@prisma/client";

class MultaRepository implements MultarepositoryDto {
    async create(data: createMultaDto): Promise<Multa> {
        return await prisma.multa.create({ data })
    }


    async get(id: number): Promise<Multa | Multa[] | null> {
        if (!id) {
            return  await prisma.multa.findMany()
        }
        return await prisma.multa.findFirst({ where: { id } })
    }

    async update({ id, ...data}: updateMultaDto): Promise<Boolean > {
        await prisma.multa.update({ where: { id  }, data })
        return true

    }
    async delete(id: number): Promise<Boolean> {
        await prisma.multa.delete({ where: { id } })

        return true
    }
}

export { MultaRepository }