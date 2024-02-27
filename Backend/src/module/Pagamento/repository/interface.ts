import { Pagamento } from '@prisma/client'
interface createPagamentoDto {
    formaDePagamento: "multicaixa" | "deposito";
    numeroDeFactura: string;
    valor: number;
    alunoId: number;
    secretarioId: number;
    mes: string;
    descontosId?: string;
}
// interface PagamentoDto {
//     formaDePagamento: "multicaixa" | "deposito";
//     numeroDeFactura: string;
//     mes: string;
//     valor: number;
//     alunoId: number;
//     secretarioId: number;
//     createdAt?: Date;
//     updatedAt?: Date;
// }


interface updatePagamentoDto {
    id: number;
    numeroDeFactura: string;
    formaDePagamento: "multicaixa" | "deposito";
    valor: string;
    mes: string;
    alunoId: number;
    secretarioId: number;
}


interface PagamentorepositoryDto {
    create(data: createPagamentoDto): Promise<Pagamento>
    get(numeroDeFactura: string): Promise<Pagamento | Pagamento[] | null>
    // delete(numeroDeFactura: string): Promise<Boolean>
    // update(data: updatePagamentoDto): Promise<Boolean>
}


export { PagamentorepositoryDto, createPagamentoDto, updatePagamentoDto }