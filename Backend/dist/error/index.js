"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor(message, status) {
        super(message),
            this.status = status;
    }
}
exports.ServerError = ServerError;
