const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    new: newTicket,
    createTicket,
    deleteTicket,
}


function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            flight
        })
    })
}

function createTicket(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, tickets) {
        res.redirect(`/flights/${req.params.id}`);
    })
}

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.ticketid, function (err, ticket) {
        res.redirect(`/flights/${req.params.flightid}`);
    })
}