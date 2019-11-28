'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
//app.use(express.static(__dirname + '/public'))
app.use('/', express.static(path.join('public')))

const router = express.Router();
router.get('/', (req, res) => {
  //res.writeHead(200, { 'Content-Type': 'text/html' });
  //res.write('<h1>Hello from Express.js Fuck Derin!</h1>');
  //res.end();
  res.render('pages/index');
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);