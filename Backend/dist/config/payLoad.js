"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payLoadGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function payLoadGenerator({ email, mainAdmin, id: userId }) {
    return jsonwebtoken_1.default.sign({ email, mainAdmin, userId }, process.env.KEY, { expiresIn: '3d' });
}
exports.payLoadGenerator = payLoadGenerator;
