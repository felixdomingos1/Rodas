"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescontoEfectuadosRepository = void 0;
const prisma_1 = require("../../../config/prisma");
class DescontoEfectuadosRepository {
    async create(data) {
        return await prisma_1.prisma.descontoEfectuados.create({ data });
    }
}
exports.DescontoEfectuadosRepository = DescontoEfectuadosRepository;
