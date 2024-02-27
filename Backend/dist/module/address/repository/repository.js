"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class AddressRepository {
    async create(data) {
        return await prisma_1.prisma.address.create({ data });
    }
    async get(id) {
        if (!id) {
            return await prisma_1.prisma.address.findMany();
        }
        return await prisma_1.prisma.address.findFirst({ where: { id } });
    }
    async update({ id, ...data }) {
        await prisma_1.prisma.address.update({ where: { id }, data });
        return true;
    }
    async delete(id) {
        await prisma_1.prisma.address.delete({ where: { id } });
        return true;
    }
}
exports.AddressRepository = AddressRepository;
