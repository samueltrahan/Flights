var express = require('express');
var router = express.Router();
const ticketCtrl = require('../controllers/tickets');

/* GET home page. */
router.get('/flights/:id/tickets/new/', ticketCtrl.new);
router.post('/tickets/:id', ticketCtrl.createTicket);
router.delete('/tickets/:flightid/:ticketid', ticketCtrl.deleteTicket);

module.exports = router;