"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDescontoController = void 0;
class CreateDescontoController {
    constructor(createDescontoUseCase) {
        this.createDescontoUseCase = createDescontoUseCase;
    }
    async handle(req, res) {
        const data = req.body;
        try {
            // await createPropinaSchema.validate(data)
            const Desconto = await this.createDescontoUseCase.execute(data);
            res.status(201).json(Desconto);
        }
        catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}
exports.CreateDescontoController = CreateDescontoController;
