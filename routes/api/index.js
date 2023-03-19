const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// add prefix of `/thoughts` to routes created in `thought-routes.js`
//http://localhost:3001/api/thoughts
router.use('/thoughts', thoughtRoutes);
// add prefix of `/users` to routes created in `user-routes.js`
//http://localhost:3001/api/users
router.use('/users', userRoutes);


module.exports = router;
