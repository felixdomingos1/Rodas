import { Multa } from '@prisma/client'
interface createMultaDto {
    descricao: string;
    valor: number;
}

interface updateMultaDto {
    id: number;
    descricao: string;
    valor: number;
}


interface MultarepositoryDto {
    create(data: createMultaDto): Promise<Multa>
    get(id: number): Promise<Multa | Multa[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateMultaDto): Promise<Boolean>
}


export { MultarepositoryDto, createMultaDto, updateMultaDto }