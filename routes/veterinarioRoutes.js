import express from "express";
import {
    registrar,
    perfil,
    confirmar,
    autenticar,
    comprobarToken,
    olvidePassword,
    nuevoPassword,
    actualizarPerfil,
    actualizarContraseña
} from '../controllers/veterinarioController.js';
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

//ROUTAS SIN CUENTA AREA PUBLICA
router.post('/',registrar);
router.get('/confirmar/:token',confirmar);
router.post('/login',autenticar);
router.post('/olvide-password',olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);
// router.get('/olvide-password/:token',comprobarToken);
// router.post('/olvide-password/:token',nuevoPassword);

//ROUTAS CON CUENTA AREA PRIVADA
router.get('/perfil',checkAuth,perfil);
router.put('/perfil/:id',checkAuth,actualizarPerfil);
router.put('/actualizar-password',checkAuth,actualizarContraseña);

export default router;