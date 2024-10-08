import { Router } from 'express';
import User from '../models/userModel.js';

const router = Router();

router.post('/registroUsuario', async (req, res) => {
  const {nombreUsuario, nombre , contrasena, rol } = req.body;
  try {
    let findUser = await User.findOne({
      where: { nombreUsuario: nombreUsuario },
      attributes: ['nombreUsuario', 'nombre', 'contrasena', 'rol'],
    });
    console.log(findUser);
    if(!findUser){
      await User.create({
        nombreUsuario,
        nombre,
        contrasena,
        rol
      });
      res.status(201).send({ mensaje: 'Usuario creado exitosamente'});
    }else{
      res.status(409).send({ mensaje: 'usuario existente'});
    }
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).send({ mensaje: 'Error del servidor', error });
  }
});

router.post('/login', async (req, res) => {
  const {nombreUsuario, contrasena} = req.body;
  try {
    let findUser = await User.findOne({
      where: { nombreUsuario: nombreUsuario },
      attributes: ['nombreUsuario', 'nombre', 'contrasena', 'rol'],
    });
    if(findUser && findUser.contrasena === contrasena){
      res.status(201).send({ mensaje: 'Usuario logeado', findUser});
    }else{
      res.status(409).send({ mensaje: 'usuario no existente o contraseña invalida'});
    }
  } catch (error) {
    console.error('Error al loger el usuario:', error);
    res.status(500).send({ mensaje: 'Error del servidor', error });
  }
});

router.get('/findUser', async (req, res) => {
  const { nombreUsuario } = req.query;
  try {
    let findUser = await User.findOne({
      where: { nombreUsuario: nombreUsuario },
      attributes: ['nombre', 'rol'],
    });
    console.log(findUser);
    if (!findUser) {
      res.status(200).send({ mensaje: 'usuario no encontrado', user: findUser });
    } else {
      res.status(200).send({ user: findUser });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ mensaje: 'Error del servidor' });
  }
});

export default router;