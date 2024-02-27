"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const create_1 = require("../module/address/useCases/create");
const get_1 = require("../module/address/useCases/get");
const put_1 = require("../module/address/useCases/put");
const addressRouter = (0, express_1.Router)();
exports.addressRouter = addressRouter;
addressRouter.post('/create', async (req, res) => {
    return await create_1.createAddress.handle(req, res);
});
addressRouter.get('/get/:id', async (req, res) => {
    return await get_1.getAddress.handle(req, res);
});
addressRouter.put('/put/:id', auth_1.authUser, async (req, res) => {
    return await put_1.PutAddress.handle(req, res);
});
