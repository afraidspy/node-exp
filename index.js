/*
https://stephensugden.com/middleware_guide/
http://evanhahn.com/understanding-express/
A minimal and flexible node.js web application framework
*/
const express = require('express'),
     http = require('http'),
     morgan = require('morgan'),
     bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use(express.static(__dirname + '/public'));

app.use('/:dishId',(req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Express Server</h1></body></html>');
});
//PROMOTIONS
const promotionsRouter = require('./routes/promoRouter');
app.use('/promotions', promotionsRouter);
app.use('/:promoId',(req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Express Server</h1></body></html>');
});
//LEADERS
const leaderRouter = require('./routes/leaderRouter');
app.use('/leaders', leaderRouter);
app.use('/:leaderId',(req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Express Server</h1></body></html>');
});


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
