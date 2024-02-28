"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propinaRouter = void 0;
const express_1 = require("express");
const index_1 = require("../module/propina/useCases/create/index");
const index_2 = require("../module/propina/useCases/get/index");
const auth_1 = require("../middleware/auth");
const put_1 = require("../module/propina/useCases/put");
const delete_1 = require("../module/propina/useCases/delete");
const propinaRouter = (0, express_1.Router)();
exports.propinaRouter = propinaRouter;
propinaRouter.post('/create', async (req, res) => {
    return await index_1.createPropina.handle(req, res);
});
propinaRouter.get('/get/:id', async (req, res) => {
    return await index_2.getPropina.handle(req, res);
});
propinaRouter.put('/put/:id', auth_1.authUser, async (req, res) => {
    return await put_1.PutPropina.handle(req, res);
});
propinaRouter.delete('/delete/:id', auth_1.authUser, async (req, res) => {
    return await delete_1.DeletePropina.handle(req, res);
});
