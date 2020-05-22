var express = require('express');
var router = express.Router();
const flightCrtl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightCrtl.new);
router.get('/', flightCrtl.index);
router.post('/', flightCrtl.create);

module.exports = router;