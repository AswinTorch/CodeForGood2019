const express = require('express');
const router = express.Router();

// Subrouters;
const usersRouter = require('./users');

// Mount our subrouters to assemble our apiRouter;
router.use('/users', usersRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Bad Request 404");
  error.status = 404;
  next(error);
});


// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
