"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunoRouter = void 0;
const express_1 = require("express");
const index_1 = require("../module/aluno/useCases/create/index");
const get_1 = require("../module/aluno/useCases/get");
// import { PutAluno } from "../module/aluno/useCases/put";
const alunoRouter = (0, express_1.Router)();
exports.alunoRouter = alunoRouter;
alunoRouter.post('/create', async (req, res) => {
    return await index_1.createAluno.handle(req, res);
});
alunoRouter.get('/get/:id', async (req, res) => {
    return await get_1.getAluno.handle(req, res);
});
