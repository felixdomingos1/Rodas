"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescontoRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class DescontoRepository {
    async create(data) {
        return await prisma_1.prisma.desconto.create({ data });
    }
    async get(id) {
        if (!id) {
            return await prisma_1.prisma.desconto.findMany();
        }
        return await prisma_1.prisma.desconto.findFirst({ where: { id } });
    }
    async update({ id, ...data }) {
        await prisma_1.prisma.desconto.update({ where: { id }, data });
        return true;
    }
    async delete(id) {
        await prisma_1.prisma.desconto.delete({ where: { id } });
        return true;
    }
}
exports.DescontoRepository = DescontoRepository;
