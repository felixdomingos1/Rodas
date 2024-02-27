import * as yup from 'yup'
const createsecretarioSchema = yup.object({
    nomeCompleto: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    mainAdmin: yup.boolean().required(),
    addressId: yup.number()
})

const createPropinaSchema = yup.object({
    valor: yup.number().required(),
    descricao: yup.string().required(),
})


const createAddressSchema = yup.object({
    provincia: yup.string().required(),
    municipio: yup.string().required(),
    bairro: yup.string().required(),
    rua: yup.string().required()
})

const createAlunoSchema = yup.object({
    nomeCompleto: yup.string().required(),
    numeroDeprocesso: yup.string().required(),
    email: yup.string().email(),
    BI: yup.string().required(),
    classe: yup.string().required(),
    curso: yup.string().required(),
    turma: yup.string().required(),
    dataNascimento: yup.string().required(),
})

const createPagamentoSchema = yup.object({
    formaDePagamento: yup.string().required(),
    valor: yup.number().required(),
    mes: yup.string().required(),
    descontosId: yup.string().required(),
    alunoId: yup.number().required(),
})




export { createsecretarioSchema, createPropinaSchema, createAddressSchema, createAlunoSchema, createPagamentoSchema }