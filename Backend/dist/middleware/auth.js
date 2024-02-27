"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authUser(req, res, next) {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido' });
    }
    jsonwebtoken_1.default.verify(token, process.env.KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token de autorização invalido' });
        }
        req.body.secretarioId = decoded.secretarioId;
        req.body.mainAdmin = decoded.mainAdmin;
        next();
    });
}
exports.authUser = authUser;
