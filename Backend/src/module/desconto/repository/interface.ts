import { Desconto } from '@prisma/client'
interface createDescontoDto {
    descricao: string;
    valor: number;
}

interface updateDescontoDto {
    id: number;
    descricao?: string;
    valor?: number;
}


interface DescontorepositoryDto {
    create(data: createDescontoDto): Promise<Desconto>
    get(id: number): Promise<Desconto | Desconto[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateDescontoDto): Promise<Boolean>
}


export { DescontorepositoryDto, createDescontoDto, updateDescontoDto }