import { prisma } from "../../../config/prisma";
import { DescontorepositoryDto, createDescontoDto, updateDescontoDto } from "./interface";
import { Desconto } from "@prisma/client";

class DescontoRepository implements DescontorepositoryDto {
    async create(data: createDescontoDto): Promise<Desconto> {
        return await prisma.desconto.create({ data })
    }


    async get(id: number): Promise<Desconto | Desconto[] | null> {
        if (!id) {
            return await prisma.desconto.findMany()
        }
        return await prisma.desconto.findFirst({ where: { id } })
    }

    async update({ id,...data}: updateDescontoDto): Promise<Boolean > {
        await prisma.desconto.update({ where: { id  }, data })
        return true

    }
    async delete(id: number): Promise<Boolean> {
        await prisma.desconto.delete({ where: { id } })

        return true
    }
}

export { DescontoRepository }