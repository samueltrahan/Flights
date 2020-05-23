const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create,
    delete: deleteFlight,
    show,
    update,
    details,
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


function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', {
            flight
        })
    })
}

function create(req, res) {
    if (!req.body.departs) {
        const defaultDate = new Date();
        defaultDate.setFullYear(defaultDate.getFullYear() + 1);
        req.body.departs = defaultDate;
    }
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function (err, flight) {
        res.redirect('/flights');
    });
}

function update(req, res) {
    if (!req.body.departs) {
        let redate = new Date();
        redate.setFullYear(redate.getFullYear() + 1);
        req.body.departs = redate
    }
    Flight.findByIdAndUpdate(req.params.id, req.body, function (err, flights) {
        res.redirect('/flights/')
    });
}

function details(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        console.log(flight);
        res.render('flights/update', {
            title: 'Update Flight',
            flight
        })
    })
}