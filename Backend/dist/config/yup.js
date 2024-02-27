"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPagamentoSchema = exports.createAlunoSchema = exports.createAddressSchema = exports.createPropinaSchema = exports.createsecretarioSchema = void 0;
const yup = __importStar(require("yup"));
const createsecretarioSchema = yup.object({
    nomeCompleto: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    mainAdmin: yup.boolean().required(),
    addressId: yup.number()
});
exports.createsecretarioSchema = createsecretarioSchema;
const createPropinaSchema = yup.object({
    valor: yup.number().required(),
    descricao: yup.string().required(),
});
exports.createPropinaSchema = createPropinaSchema;
const createAddressSchema = yup.object({
    provincia: yup.string().required(),
    municipio: yup.string().required(),
    bairro: yup.string().required(),
    rua: yup.string().required()
});
exports.createAddressSchema = createAddressSchema;
const createAlunoSchema = yup.object({
    nomeCompleto: yup.string().required(),
    numeroDeprocesso: yup.string().required(),
    email: yup.string().email(),
    BI: yup.string().required(),
    classe: yup.string().required(),
    curso: yup.string().required(),
    turma: yup.string().required(),
    dataNascimento: yup.string().required(),
});
exports.createAlunoSchema = createAlunoSchema;
const createPagamentoSchema = yup.object({
    formaDePagamento: yup.string().required(),
    valor: yup.number().required(),
    mes: yup.string().required(),
    descontosId: yup.string().required(),
    alunoId: yup.number().required(),
});
exports.createPagamentoSchema = createPagamentoSchema;
