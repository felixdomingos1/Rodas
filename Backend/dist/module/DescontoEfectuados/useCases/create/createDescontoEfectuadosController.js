"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDescontoEfectuadosController = void 0;
class CreateDescontoEfectuadosController {
    constructor(createDescontoEfectuadosUseCase) {
        this.createDescontoEfectuadosUseCase = createDescontoEfectuadosUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            // await createPropinaSchema.validate(data)
            const DescontoEfectuados = await this.createDescontoEfectuadosUseCase.execute(data);
            res.status(201).json(DescontoEfectuados);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreateDescontoEfectuadosController = CreateDescontoEfectuadosController;
