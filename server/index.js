import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

import routes from './routes/index.js'

let app = express();

var url = process.env.MONGODB_URI;
// ENV
try {
    let config = require('../env.json');
    url = process.env.MONGODB_URI || config.MONGODB_URI;
}
catch (e) {
    if (e.code === 'LESSON_NOT_FOUND') {
        console.log("CANNOT LOAD env.json");
    }
}

mongoose.connect(url);

const compiler = webpack(webpackConfig)
app.use(express.static(path.join(__dirname, 'routes')));
app.use(express.static(path.join(__dirname, '..', 'client', 'assets')));
app.use(webpackMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));
app.use('/', routes);

app.listen(3000, () => console.log('running on localhost:3000'));
