import {Router} from 'express'
import { addMensaje, getMensaje } from '../Controllers/Message.Controllers.js';

const router = Router();

router.post("/",addMensaje)
router.get("/:chatId",getMensaje)

export default router