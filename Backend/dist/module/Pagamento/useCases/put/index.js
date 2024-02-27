"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPagamento = void 0;
const repository_1 = require("../../repository/repository");
const putPagamentoUseCase_1 = require("./putPagamentoUseCase");
const putPagamentoController_1 = require("./putPagamentoController");
const pagamentoRepository = new repository_1.PagamentoRepository();
const putPagamentoUseCase = new putPagamentoUseCase_1.PutPagamentoUseCase(pagamentoRepository);
const PutPagamento = new putPagamentoController_1.PutPagamentoController(putPagamentoUseCase);
exports.PutPagamento = PutPagamento;
