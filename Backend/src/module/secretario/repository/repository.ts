import { prisma } from "../../../config/prisma";
import { SecretariorepositoryDto, createSecretarioDto, updateSecretarioDto } from "./interface";
import { Secretario } from "@prisma/client";

class SecretarioRepository implements SecretariorepositoryDto {
    async create(data: createSecretarioDto): Promise<Secretario> {
        return await prisma.secretario.create({ data })
    }

    async get(id: number): Promise<Secretario | Secretario[] | null> {
        if (!id) {
            return await prisma.secretario.findMany()
        }
        return await prisma.secretario.findFirst({ where: { id } })
    }

    async findByEmail(email: string) {
        return await prisma.secretario.findUnique({ where : { email }})
    }
    async update({ id, ...data}: updateSecretarioDto): Promise<Boolean > {
        await prisma.secretario.update({ where: { id  }, data })
        return true

    }
    async delete(id: number): Promise<Boolean> {
        await prisma.secretario.delete({ where: { id } })

        return true
    }
}

export { SecretarioRepository }