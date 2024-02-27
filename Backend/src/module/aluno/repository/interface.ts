import { Aluno } from '@prisma/client'
interface createAlunoDto {
    nomeCompleto: string;
    processo: string;
    classe: string;
    BI: string;
    turma: string;
    dataNascimento: Date;
    addressId: number | null;
}

interface updateAlunoDto {
    id?: number;
    nomeCompleto?: string;
    processo?: string;
    classe?: string;
    BI: string;
    turma?: string;
    dataNascimento?: Date;
    addressId?: number | null;
}


interface AlunorepositoryDto {
    create(data: createAlunoDto): Promise<Aluno>
    get(id: number): Promise<Aluno | Aluno[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateAlunoDto): Promise<Boolean>
}


export { AlunorepositoryDto, createAlunoDto, updateAlunoDto }