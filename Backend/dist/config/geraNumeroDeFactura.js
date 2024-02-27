"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geraNumeroDeFactura = void 0;
function geraNumeroDeFactura() {
    const firstNumber = new Date().getUTCMilliseconds();
    const year = new Date().getFullYear();
    return `${firstNumber}/${year}`;
}
exports.geraNumeroDeFactura = geraNumeroDeFactura;
