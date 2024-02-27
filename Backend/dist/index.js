"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3334;
app_1.app.listen(PORT, () => console.log('rodando na porta  ' + PORT));
