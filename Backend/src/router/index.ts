import { Router } from "express";
import { secretarioRouter } from "./secretarios.routes";
import { propinaRouter } from "./propina.routes";
import { multaRouter } from "./multa.routes";
import { addressRouter } from "./address.routes";
import { alunoRouter } from "./aluno.routes";
import { descontoRouter } from "./desconto.routes";
import { pagamentoRouter } from "./pagamento.routes";
import { calendarioRouter } from "./calendario.routes";

const router = Router()

router.use('/secretario',secretarioRouter)
router.use('/aluno',alunoRouter)
router.use('/propina',propinaRouter)
router.use('/multa',multaRouter)
router.use('/desconto',descontoRouter)
router.use('/address',addressRouter)
router.use('/pagamento',pagamentoRouter)
router.use('/calendario',calendarioRouter)


export { router }