const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.body, 'info on creating the review');
    console.log(req.params.id, 'flight id that we are writing the review for');

    Flight.findById(req.params.id, function (err, flight) {
        console.log(flight, 'this the flight document')
        flight.destinations.push(req.body);
        console.log(req.body);
        flight.save(function (err) {
            res.redirect(`/flight/${flights._id}`);
        })
    })
}