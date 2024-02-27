"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagamentoRouter = void 0;
const express_1 = require("express");
// import { authUser } from "../middleware/auth";
const create_1 = require("../module/Pagamento/useCases/create");
const get_1 = require("../module/Pagamento/useCases/get");
const auth_1 = require("../middleware/auth");
// import { getPagamento } from "../module/Pagamento/useCases/get";
// import { PutPagamento } from "../module/Pagamento/useCases/put";
const pagamentoRouter = (0, express_1.Router)();
exports.pagamentoRouter = pagamentoRouter;
pagamentoRouter.post('/create', auth_1.authUser, async (req, res) => {
    return await create_1.createPagamento.handle(req, res);
});
pagamentoRouter.get('/get/:numeroDeFactura', async (req, res) => {
    return await get_1.getPagamento.handle(req, res);
});
