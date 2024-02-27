import { DescontoEfectuados } from '@prisma/client'
interface createDescontoEfectuadosDto {
    pagamentoId: number;
    descontoId: number;
    numeroDeFactura: string;
}

// interface updateDescontoEfectuadosDto {
//     pagamentoId: number;
//     descontoId: number;
// }


interface DescontoEfectuadosrepositoryDto {
    create(data: createDescontoEfectuadosDto): Promise<DescontoEfectuados>
    // get(id: number): Promise<DescontoEfectuados | DescontoEfectuados[] | null>
    // delete(id: number): Promise<Boolean>
    // update(data: updateDescontoEfectuadosDto): Promise<Boolean>
}


export { DescontoEfectuadosrepositoryDto, createDescontoEfectuadosDto }