var express = require('express');
var router = express.Router();
const flightCrtl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightCrtl.new);
router.get('/', flightCrtl.index);
router.post('/', flightCrtl.create);
router.get('/:id', flightCrtl.show);
router.delete('/:id', flightCrtl.delete);
router.post('/update/:id', flightCrtl.update);
router.get('/:id/edit', flightCrtl.details);


module.exports = router;