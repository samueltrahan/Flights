const Flight = require('../models/flight');

module.exports = {
    new: newPage,
    index,
    create,
}

function newPage(req, res) {
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
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}