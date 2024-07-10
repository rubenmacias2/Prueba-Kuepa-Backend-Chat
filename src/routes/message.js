import { Router } from 'express';
import Mensaje from '../models/messageModel.js';

const router = Router();

router.get('/getMessages', async (req, res) => {
  try {
    let mensajes = await Mensaje.findAll({
      attributes: ['id', 'contenido', 'fecha', 'usuario'],
    });
    if (mensajes) {
      res.status(201).send({ mensaje: 'lista obtenida', listChats: mensajes.map(mensaje => mensaje.dataValues) });
    } else {
      res.status(404).send({ mensaje: 'no hay mensajes' });
    }
  } catch (error) {
    console.error('Error al llamar los chats:', error);
    res.status(500).send({ mensaje: 'Error del servidor', error });
  }
});

export default router;