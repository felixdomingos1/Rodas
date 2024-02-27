import { Propina } from '@prisma/client'
interface createPropinaDto {
    descricao: string;
    valor: number;
}

interface updatePropinaDto {
    id: number;
    descricao: string;
    valor: number;
}


interface PropinarepositoryDto {
    create(data: createPropinaDto): Promise<Propina>
    get(id: number): Promise<Propina | Propina[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updatePropinaDto): Promise<Boolean>
}


export { PropinarepositoryDto, createPropinaDto, updatePropinaDto }