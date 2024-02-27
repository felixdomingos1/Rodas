import { geraNumeroDeFactura } from "../../../../config/geraNumeroDeFactura";
import { ServerError } from "../../../../error/index";
import { createPagamentoDto } from "../../repository/interface";
import { PagamentoRepository } from "../../repository/repository";
import { DescontoEfectuadosRepository } from "../../../DescontoEfectuados/repository/repository";

class CreatePagamentoUseCase {
    constructor(
        private pagamentoRepository: PagamentoRepository,
        private descontoEfectuadosRepository: DescontoEfectuadosRepository
    ) { }

    async execute({ mes, descontosId, numeroDeFactura, ...data }: createPagamentoDto) {

        try {
            numeroDeFactura = geraNumeroDeFactura()
            const descontosFeitos = descontosId!.split(',')
            const mesesPagos = mes.split(',')
            const currentYear = new Date().getFullYear()

            const pagamenntos = await this.pagamentoRepository.getByYear(currentYear)

            let novaFactura;
            if (!pagamenntos.length) {
                const numeroDeFactura = 1 + '.' + geraNumeroDeFactura()

                for (const mes of mesesPagos) {
                    let index = 0

                     novaFactura = await this.pagamentoRepository.create({ mes, numeroDeFactura, ...data })

                    await this.descontoEfectuadosRepository.create({
                        descontoId: Number(descontosFeitos[index]),
                        numeroDeFactura,
                        pagamentoId: novaFactura.id
                    })

                    index++
                }


                return novaFactura
            }
            const ultimoPagamento = pagamenntos[pagamenntos.length - 1]

            const id = ultimoPagamento['numeroDeFactura'].split('.')[0]

            const novoId = Number(id) + 1

             numeroDeFactura = novoId + '.' + geraNumeroDeFactura()



             for (const mes of mesesPagos) {
                let index = 0

                 novaFactura = await this.pagamentoRepository.create({ mes, numeroDeFactura, ...data })

                await this.descontoEfectuadosRepository.create({
                    descontoId: Number(descontosFeitos[index]),
                    numeroDeFactura,
                    pagamentoId: novaFactura.id
                })

                index++
            }


            return novaFactura

        } catch (error: any) {
            throw new ServerError(error.message, 400);
        }
    }
}

export { CreatePagamentoUseCase }