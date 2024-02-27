import { prisma } from "../../../config/prisma";
import { PagamentorepositoryDto, createPagamentoDto, updatePagamentoDto } from "./interface";
import { Pagamento } from "@prisma/client";

interface createFact extends createPagamentoDto {
     numeroDeFactura: string
}


class PagamentoRepository implements PagamentorepositoryDto {
    async create(data: createFact): Promise<Pagamento> {
        return await prisma.pagamento.create({ data })
    }


    async get(numeroDeFactura: string): Promise<Pagamento | Pagamento[] | null> {
        if (!numeroDeFactura) {
            return await prisma.pagamento.findMany()
        }
        return await prisma.pagamento.findFirst({
             where: { numeroDeFactura },
             include: {
                aluno: true,
                desconto: true,
                multa: true,
                propina:true,
                secretario:true
             }
         })
    }

    async update({ numeroDeFactura, ...data }: updatePagamentoDto): Promise<Boolean> {
        await prisma.pagamento.update({ where: { numeroDeFactura }, data })
        return true
    }
    async delete(numeroDeFactura: string): Promise<Boolean> {
        await prisma.pagamento.delete({ where: { numeroDeFactura } })
        return true
    }

    async getByYear(year: number) {
        return await prisma.pagamento.findMany({
            where: {
                AND: [
                    { createdAt: { gte: new Date(`${year}-01-01`) } },
                    { createdAt: { lt: new Date(`${year + 1}-01-01`) } }
                ]
            }
        })
    }
}

export { PagamentoRepository }