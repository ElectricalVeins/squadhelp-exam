const express = require('express');
const tokenMiddlewares = require('../middlewares/tokenMiddlewares');
const {validateTimer} = require('../middlewares/validators');
const timerController = require('../controllers/timerController');

const timerRouter = express.Router();


timerRouter.get('/getTimers',
  tokenMiddlewares.verifyToken,
  timerController.getUserTimers
);

timerRouter.post('/createTimer',
  tokenMiddlewares.verifyToken,
  validateTimer,
  timerController.createTimer
);

timerRouter.delete('/deleteTimer',
  tokenMiddlewares.verifyToken,
  timerController.deleteTimer
);

timerRouter.put('/updateTimer',
  tokenMiddlewares.verifyToken,
  timerController.updateTimer
);

module.exports = timerRouter;
