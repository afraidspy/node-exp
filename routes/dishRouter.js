const express = require('express');
const bodyParser = require('body-parser');
//https://funnyfrontend.com/introduccion-al-stack-mean-4-rutas-routing-con-nodejs-y-express/

/**
 * Utilice la clase express.Router para crear manejadores de rutas montables y modulares.
 *  Una instancia Router es un sistema de middleware y direccionamiento completo;
 *  por este motivo, a menudo se conoce como una “miniaplicación"
 */
const dishRouter = express.Router();
//dishRouter.param('/:dishId');

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    //res.end('Will send all the dishes to you!');
   res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})  
.put((req, res, next) =>     {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes/dishId');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

module.exports = dishRouter;