import { Secretario } from '@prisma/client'
interface createSecretarioDto {
    nomeCompleto: string;
    email: string;
    password: string;
    mainAdmin: boolean;
}

interface updateSecretarioDto {
    id: number;
    nomeCompleto: string;
    email: string;
    password: string;
    mainAdmin: boolean;
    addressId: number | null;
}


interface SecretariorepositoryDto {
    create(data: createSecretarioDto): Promise<Secretario>
    get(id: number): Promise<Secretario | Secretario[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateSecretarioDto): Promise<Boolean>
}


export { SecretariorepositoryDto, createSecretarioDto, updateSecretarioDto }