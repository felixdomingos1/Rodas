import { Aluno } from '@prisma/client'
interface createAlunoDto {
    nomeCompleto: string;
    numeroDeprocesso: string;
    classe: string;
    curso: string;
    email: string | null;
    BI: string;
    turma: string;
    dataNascimento: Date;
}

interface updateAlunoDto {
    id: number;
    nomeCompleto?: string;
    numeroDeprocesso?: string;
    classe?: string;
    curso?: string;
    email?: string | null;
    BI?: string;
    turma?: string;
    dataNascimento?: Date;
}


interface AlunorepositoryDto {
    create(data: createAlunoDto): Promise<Aluno>
    get(id: number): Promise<Aluno | Aluno[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateAlunoDto): Promise<Boolean>
}


export { AlunorepositoryDto, createAlunoDto, updateAlunoDto }