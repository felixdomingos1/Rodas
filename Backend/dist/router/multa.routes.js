"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multaRouter = void 0;
const express_1 = require("express");
const create_1 = require("../module/multa/useCases/create");
const get_1 = require("../module/multa/useCases/get");
const multaRouter = (0, express_1.Router)();
exports.multaRouter = multaRouter;
multaRouter.post('/create', async (req, res) => {
    return await create_1.createMulta.handle(req, res);
});
multaRouter.get('/get/:id', async (req, res) => {
    return await get_1.getMulta.handle(req, res);
});
