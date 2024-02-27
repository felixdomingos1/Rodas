"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagamentoUseCase = void 0;
const geraNumeroDeFactura_1 = require("../../../../config/geraNumeroDeFactura");
const index_1 = require("../../../../error/index");
class CreatePagamentoUseCase {
    constructor(pagamentoRepository, descontoEfectuadosRepository) {
        this.pagamentoRepository = pagamentoRepository;
        this.descontoEfectuadosRepository = descontoEfectuadosRepository;
    }
    async execute({ mes, descontosId, numeroDeFactura, ...data }) {
        try {
            numeroDeFactura = (0, geraNumeroDeFactura_1.geraNumeroDeFactura)();
            const descontosFeitos = descontosId.split(',');
            const mesesPagos = mes.split(',');
            const currentYear = new Date().getFullYear();
            const pagamenntos = await this.pagamentoRepository.getByYear(currentYear);
            let novaFactura;
            if (!pagamenntos.length) {
                const numeroDeFactura = 1 + '.' + (0, geraNumeroDeFactura_1.geraNumeroDeFactura)();
                for (const mes of mesesPagos) {
                    let index = 0;
                    novaFactura = await this.pagamentoRepository.create({ mes, numeroDeFactura, ...data });
                    await this.descontoEfectuadosRepository.create({
                        descontoId: Number(descontosFeitos[index]),
                        numeroDeFactura,
                        pagamentoId: novaFactura.id
                    });
                    index++;
                }
                return novaFactura;
            }
            const ultimoPagamento = pagamenntos[pagamenntos.length - 1];
            const id = ultimoPagamento['numeroDeFactura'].split('.')[0];
            const novoId = Number(id) + 1;
            numeroDeFactura = novoId + '.' + (0, geraNumeroDeFactura_1.geraNumeroDeFactura)();
            for (const mes of mesesPagos) {
                let index = 0;
                novaFactura = await this.pagamentoRepository.create({ mes, numeroDeFactura, ...data });
                await this.descontoEfectuadosRepository.create({
                    descontoId: Number(descontosFeitos[index]),
                    numeroDeFactura,
                    pagamentoId: novaFactura.id
                });
                index++;
            }
            return novaFactura;
        }
        catch (error) {
            throw new index_1.ServerError(error.message, 400);
        }
    }
}
exports.CreatePagamentoUseCase = CreatePagamentoUseCase;
