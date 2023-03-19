const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
//http://localhost:3001/api
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> 404 Error!</h1>');
});

module.exports = router;



