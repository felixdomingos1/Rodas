"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddress = void 0;
const repository_1 = require("../../repository/repository");
const getAddressUseCase_1 = require("./getAddressUseCase");
const getAddressController_1 = require("./getAddressController");
const addressRepository = new repository_1.AddressRepository();
const getAddressUseCase = new getAddressUseCase_1.GetAddressUseCase(addressRepository);
const getAddress = new getAddressController_1.GetAddressController(getAddressUseCase);
exports.getAddress = getAddress;
