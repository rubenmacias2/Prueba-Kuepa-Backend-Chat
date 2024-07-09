import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';

config();

const port = process.env.PORT ?? 3000;
const app = express();

app.use(cors());


app.set('port',port);
app.listen(app.get('port'), () => console.log(`Server Listen to Port ${app.get('port')}`));