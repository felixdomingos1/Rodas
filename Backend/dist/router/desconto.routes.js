"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descontoRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const create_1 = require("../module/desconto/useCases/create");
const get_1 = require("../module/desconto/useCases/get");
const put_1 = require("../module/desconto/useCases/put");
const descontoRouter = (0, express_1.Router)();
exports.descontoRouter = descontoRouter;
descontoRouter.post('/create', async (req, res) => {
    return await create_1.createDesconto.handle(req, res);
});
descontoRouter.get('/get/:id', async (req, res) => {
    return await get_1.getDesconto.handle(req, res);
});
descontoRouter.put('/put/:id', auth_1.authUser, async (req, res) => {
    return await put_1.PutDesconto.handle(req, res);
});
