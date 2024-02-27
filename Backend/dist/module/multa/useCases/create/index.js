"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMulta = void 0;
const repository_1 = require("../../repository/repository");
const createMultaUseCase_1 = require("./createMultaUseCase");
const createMultaController_1 = require("./createMultaController");
const multaRepository = new repository_1.MultaRepository();
const createMultaUseCase = new createMultaUseCase_1.CreateMultaUseCase(multaRepository);
const createMulta = new createMultaController_1.CreateMultaController(createMultaUseCase);
exports.createMulta = createMulta;