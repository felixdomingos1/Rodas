import { prisma } from "../../../config/prisma";
import { PagamentorepositoryDto, createPagamentoDto } from "./interface";
import { Pagamento } from "@prisma/client";

// interface createFact extends Pagamento {
//      numeroDeFactura: string
// }


class PagamentoRepository implements PagamentorepositoryDto {
    async create(data: createPagamentoDto): Promise<Pagamento> {
        return await prisma.pagamento.create({ data })
    }


    async get(numeroDeFactura: string): Promise<Pagamento | Pagamento[] | null> {
        let resp = await prisma.pagamento.findFirst({
            where: { numeroDeFactura },
            include: {
                DescontoEfectuados: {
                    include: {
                        desconto: true
                    }
                },
                aluno: true,
                secretario: true
            }
        })

        if (!resp) {
            return await prisma.pagamento.findMany({
                include: {
                    DescontoEfectuados: {
                        include: {
                            desconto: true
                        }
                    },
                    aluno: true,
                    secretario: true,
                }
            })
        }

        return resp
    }

    // async update({ id, ...data }: updatePagamentoDto): Promise<Boolean> {
    //     await prisma.pagamento.update({ where: { id }, data })
    //     return true
    // }
    // async delete(numeroDeFactura: string): Promise<Boolean> {
    //     await prisma.pagamento.delete({ where: { numeroDeFactura } })
    //     return true
    // }

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