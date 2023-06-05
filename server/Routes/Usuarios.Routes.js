import {Router} from 'express'
import { createUser, loginUser } from '../Controllers/Usuario.Controllers.js';

const router = Router();

router.post("/",createUser)
router.post("/login",loginUser )

export default router;