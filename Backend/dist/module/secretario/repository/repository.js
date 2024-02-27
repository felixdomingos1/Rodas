"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretarioRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class SecretarioRepository {
    async create(data) {
        return await prisma_1.prisma.secretario.create({ data });
    }
    async get(id) {
        if (!id) {
            return await prisma_1.prisma.secretario.findMany();
        }
        return await prisma_1.prisma.secretario.findFirst({ where: { id } });
    }
    async findByEmail(email) {
        return await prisma_1.prisma.secretario.findUnique({ where: { email } });
    }
    async update({ id, ...data }) {
        await prisma_1.prisma.secretario.update({ where: { id }, data });
        return true;
    }
    async delete(id) {
        await prisma_1.prisma.secretario.delete({ where: { id } });
        return true;
    }
}
exports.SecretarioRepository = SecretarioRepository;
