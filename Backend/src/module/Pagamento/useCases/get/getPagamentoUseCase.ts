import { PagamentoRepository } from "module/Pagamento/repository/repository";
import { ServerError } from "../../../../error/index";

class GetPagamentoUseCase {
    constructor(private PagamentoRepository: PagamentoRepository) { }

    async execute(numeroDeFactura: string){
        
        try {
            return await this.PagamentoRepository.get(numeroDeFactura)
        } catch (error) {
            throw new ServerError("Falha ao pegar a Pagamento", 400);
        }
    }
}

export { GetPagamentoUseCase }