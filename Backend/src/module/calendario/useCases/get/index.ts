import { CalendarioRepository } from "../../repository/repository"
import { GetCalendarioController } from "./getCalendarioController"
import { GetCalendarioUseCase } from "./getCalendarioUseCase"


const calendarioRepository = new CalendarioRepository()
const getCalendarioUseCase = new GetCalendarioUseCase(calendarioRepository)
const getCalendario = new GetCalendarioController(getCalendarioUseCase)

export { getCalendario }