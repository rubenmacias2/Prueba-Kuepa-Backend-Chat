import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import logger from 'morgan';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import Sequelize from './database/conectionDb.js';
import user from './routes/user.js';
import message from './routes/message.js';
import Mensaje from './models/messageModel.js';

config();
Sequelize;

const port = process.env.PORT ?? 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('mensajeEnviado', async (data) => {
    try {
      const nuevoMensaje = await Mensaje.create(data);
      io.emit('nuevoMensaje', nuevoMensaje.dataValues);
    } catch (err) {
      console.log(err);
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(user);
app.use(message);

app.set('port', port);
server.listen(app.get('port'), () => console.log(`Server Listen to Port ${app.get('port')}`));