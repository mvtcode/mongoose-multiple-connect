'use strict';

import path from 'path';
import express from 'express';
import routers from './routers';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{ maxAge: 129600000}));//1.5d
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(compression());
app.use(morgan('dev'));
app.use(routers);

export default app;