"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class PagamentoRepository {
    async create(data) {
        return await prisma_1.prisma.pagamento.create({ data });
    }
    async get(numeroDeFactura) {
        if (!numeroDeFactura) {
            return await prisma_1.prisma.pagamento.findMany();
        }
        return await prisma_1.prisma.pagamento.findFirst({ where: { numeroDeFactura } });
    }
    async update({ numeroDeFactura, ...data }) {
        await prisma_1.prisma.pagamento.update({ where: { numeroDeFactura }, data });
        return true;
    }
    async delete(numeroDeFactura) {
        await prisma_1.prisma.pagamento.delete({ where: { numeroDeFactura } });
        return true;
    }
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
