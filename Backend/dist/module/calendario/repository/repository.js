"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class CalendarioRepository {
    async create(data) {
        return await prisma_1.prisma.calendario.create({ data });
    }
    async get(id) {
        if (!id) {
            return await prisma_1.prisma.calendario.findMany();
        }
        return await prisma_1.prisma.calendario.findFirst({ where: { id } });
    }
    async update({ id, ...data }) {
        await prisma_1.prisma.calendario.update({ where: { id }, data });
        return true;
    }
    async delete(id) {
        await prisma_1.prisma.calendario.delete({ where: { id } });
        return true;
    }
}
exports.CalendarioRepository = CalendarioRepository;
