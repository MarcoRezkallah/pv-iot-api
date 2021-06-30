import testRouter from './routes/test';
import express, { Application, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

var app: Application = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

//end point to test connectivity

app.use('/test', testRouter);

export default app;
