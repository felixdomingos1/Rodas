"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class AlunoRepository {
    async create(data) {
        return await prisma_1.prisma.aluno.create({ data });
    }
    async get(id) {
        if (!id) {
            return await prisma_1.prisma.aluno.findMany();
        }
        return await prisma_1.prisma.aluno.findFirst({ where: { id } });
    }
    async findByBInumber(BI) {
        return await prisma_1.prisma.aluno.findUnique({ where: { BI } });
    }
    async update({ BI, ...data }) {
        await prisma_1.prisma.aluno.update({ where: { BI }, data });
        return true;
    }
    async delete(id) {
        await prisma_1.prisma.aluno.delete({ where: { id } });
        return true;
    }
}
exports.AlunoRepository = AlunoRepository;
