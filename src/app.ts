import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));
app.use(cookieParser());


const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(routes);


export default app;
