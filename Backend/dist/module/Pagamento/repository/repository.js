"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoRepository = void 0;
const prisma_1 = require("../../../config/prisma");
// interface createFact extends Pagamento {
//      numeroDeFactura: string
// }
class PagamentoRepository {
    async create(data) {
        return await prisma_1.prisma.pagamento.create({ data });
    }
    async get(numeroDeFactura) {
        let resp = await prisma_1.prisma.pagamento.findFirst({
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
        });
        if (!resp) {
            return await prisma_1.prisma.pagamento.findMany({
                include: {
                    DescontoEfectuados: {
                        include: {
                            desconto: true
                        }
                    },
                    aluno: true,
                    secretario: true,
                }
            });
        }
        return resp;
    }
    // async update({ id, ...data }: updatePagamentoDto): Promise<Boolean> {
    //     await prisma.pagamento.update({ where: { id }, data })
    //     return true
    // }
    // async delete(numeroDeFactura: string): Promise<Boolean> {
    //     await prisma.pagamento.delete({ where: { numeroDeFactura } })
    //     return true
    // }
    async getByYear(year) {
        return await prisma_1.prisma.pagamento.findMany({
            where: {
                AND: [
                    { createdAt: { gte: new Date(`${year}-01-01`) } },
                    { createdAt: { lt: new Date(`${year + 1}-01-01`) } }
                ]
            }
        });
    }
}
exports.PagamentoRepository = PagamentoRepository;
