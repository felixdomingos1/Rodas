import { Router } from "express";
import { secretarioRouter } from "./secretarios.routes";
import { alunoRouter } from "./aluno.routes";
import { descontoRouter } from "./desconto.routes";
import { pagamentoRouter } from "./pagamento.routes";

const router = Router()

router.use('/secretario',secretarioRouter)
router.use('/aluno',alunoRouter)
router.use('/desconto',descontoRouter)
router.use('/pagamento',pagamentoRouter)


export { router }