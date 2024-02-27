"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descontoRouter = void 0;
const express_1 = require("express");
// import { authUser } from "../middleware/auth";
const create_1 = require("../module/desconto/useCases/create");
const get_1 = require("../module/desconto/useCases/get");
// import { PutDesconto } from "../module/desconto/useCases/put";
const descontoRouter = (0, express_1.Router)();
exports.descontoRouter = descontoRouter;
descontoRouter.post('/create', async (req, res) => {
    return await create_1.createDesconto.handle(req, res);
});
descontoRouter.get('/get/:id', async (req, res) => {
    return await get_1.getDesconto.handle(req, res);
});
