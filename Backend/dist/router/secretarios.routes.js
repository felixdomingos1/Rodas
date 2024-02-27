"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretarioRouter = void 0;
const express_1 = require("express");
const index_1 = require("../module/secretario/useCases/create/index");
const get_1 = require("../module/secretario/useCases/get");
const secretarioRouter = (0, express_1.Router)();
exports.secretarioRouter = secretarioRouter;
secretarioRouter.post('/create', async (req, res) => {
    return await index_1.createSecretario.handle(req, res);
});
secretarioRouter.get('/get/:id', async (req, res) => {
    return await get_1.getSecretario.handle(req, res);
});
