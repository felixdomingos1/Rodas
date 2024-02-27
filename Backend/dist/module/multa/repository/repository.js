"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultaRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class MultaRepository {
    async create(data) {
        return await prisma_1.prisma.multa.create({ data });
    }
    async get(id) {
        if (!id) {
            return await prisma_1.prisma.multa.findMany();
        }
        return await prisma_1.prisma.multa.findFirst({ where: { id } });
    }
    async update({ id, ...data }) {
        await prisma_1.prisma.multa.update({ where: { id }, data });
        return true;
    }
    async delete(id) {
        await prisma_1.prisma.multa.delete({ where: { id } });
        return true;
    }
}
exports.MultaRepository = MultaRepository;
