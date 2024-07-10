import { Router } from 'express';
import Mensaje from '../models/messageModel.js';


const router = Router();


router.get('/getMessages', async (req, res) => {
  try {
  let mensajes = await Mensaje.findAll({
      attributes: ['id', 'contenido', 'fecha', 'usuario'],
    });
    if (mensajes){
      res.status(201).send({ mensaje: 'lista obtenida', listChats: mensajes.map(mensaje => mensaje.dataValues)});
    }else{
      res.status(404).send({ mensaje: 'no hay mensajes'});
    }
    
  } catch (error) {
    console.error('Error al llamar los chats:', error);
    res.status(500).send({ mensaje: 'Error del servidor', error });
  }
});
router.post('/createMessage', async (req, res) => {
  const { contenido, fecha, usuario } = req.body;

  try {
    const nuevoMensaje = await Mensaje.create({
      contenido,
      fecha,
      usuario
    });

    res.status(201).json({ mensaje: 'Mensaje creado exitosamente', nuevoMensaje });
  } catch (error) {
    console.error('Error al crear el mensaje:', error);
    res.status(500).json({ mensaje: 'Error del servidor al crear el mensaje', error });
  }
});
export default router;