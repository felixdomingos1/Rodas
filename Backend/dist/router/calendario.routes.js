"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarioRouter = void 0;
const express_1 = require("express");
const index_1 = require("../module/calendario/useCases/get/index");
const calendarioRouter = (0, express_1.Router)();
exports.calendarioRouter = calendarioRouter;
// calendarioRouter.post('/create', async (req:Request, res:Response) => {
//     return await createCalendario.handle(req,res)
// })
calendarioRouter.get('/get/:id', async (req, res) => {
    return await index_1.getCalendario.handle(req, res);
});
