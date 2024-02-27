import { Address } from '@prisma/client'
interface createAddressDto {
    provincia: string;
    municipio: string;
    bairro: string;
    rua: string;
}

interface updateAddressDto {
    id?: number;
    provincia?: string;
    municipio?: string;
    bairro?: string;
    rua?: string;
}


interface AddressrepositoryDto {
    create(data: createAddressDto): Promise<Address>
    get(id: number): Promise<Address | Address[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateAddressDto): Promise<Boolean>
}


export { AddressrepositoryDto, createAddressDto, updateAddressDto }