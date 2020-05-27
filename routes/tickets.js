var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets');

/* GET home page. */
router.get('/flights/:id/tickets/new/', ticketCtrl.new);
router.post('/flights/:id', ticketCtrl.createTicket);

module.exports = router;