const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    new: newTicket,
    createTicket,
}


function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/new', {
            title: 'Add Ticket',
            flight
        })
    })
}

function createTicket(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, tickets) {
        res.redirect(`/flights/${req.params.id}`);
    })
}

