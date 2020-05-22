const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create,
}

function newFlight(req, res) {
    res.render('flights/new');
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {
            flights
        });
    })
}

function create(req, res) {
    if(!req.body.departs) {
        const defaultDate = new Date();
        defaultDate.setFullYear(defaultDate.getFullYear() + 1);
        req.body.departs = defaultDate;
    }
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}