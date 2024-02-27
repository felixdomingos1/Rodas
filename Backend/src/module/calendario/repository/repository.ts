import { prisma } from "../../../config/prisma";
import { CalendariorepositoryDto, createCalendarioDto, updateCalendarioDto } from "./interface";
import { Calendario } from "@prisma/client";

class CalendarioRepository implements CalendariorepositoryDto {
    async create(data: createCalendarioDto): Promise<Calendario> {
        return await prisma.calendario.create({ data })
    }

    async get(id: number): Promise<Calendario | Calendario[] | null> {
        if (!id) {
            return await prisma.calendario.findMany()
        }
        return await prisma.calendario.findFirst({ where: { id } })
    }

    async update({ id, ...data}: updateCalendarioDto): Promise<Boolean > {
        await prisma.calendario.update({ where: { id  }, data })
        return true

    }
    async delete(id: number): Promise<Boolean> {
        await prisma.calendario.delete({ where: { id } })

        return true
    }
}

export { CalendarioRepository }