import { prisma } from "../../../config/prisma";
import { AlunorepositoryDto, createAlunoDto, updateAlunoDto } from "./interface";
import { Aluno } from "@prisma/client";

class AlunoRepository implements AlunorepositoryDto {
    async create(data: createAlunoDto): Promise<Aluno> {
        return await prisma.aluno.create({ data })
    }

    async get(id: number): Promise<Aluno | Aluno[] | null> {
        if (!id) {
            return await prisma.aluno.findMany()
        }
        return await prisma.aluno.findFirst({ where: { id } })
    }

    async findByBInumber(BI: string) {
        return await prisma.aluno.findUnique({ where : { BI }})
    }
    async update({ id, ...data}: updateAlunoDto): Promise<Boolean > {
        await prisma.aluno.update({ where: { id  }, data })
        return true

    }
    async delete(id: number): Promise<Boolean> {
        await prisma.aluno.delete({ where: { id } })

        return true
    }
}

export { AlunoRepository }