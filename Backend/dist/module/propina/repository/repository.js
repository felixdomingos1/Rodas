"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropinaRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class PropinaRepository {
    async create(data) {
        return await prisma_1.prisma.propina.create({ data });
    }
    async get(id) {
        if (!id) {
            return await prisma_1.prisma.propina.findMany();
        }
        return await prisma_1.prisma.propina.findFirst({ where: { id } });
    }
    async update({ id, userId, ...data }) {
        await prisma_1.prisma.propina.update({ where: { id }, data });
        return true;
    }
    async delete(id) {
        await prisma_1.prisma.propina.delete({ where: { id } });
        return true;
    }
}
exports.PropinaRepository = PropinaRepository;
