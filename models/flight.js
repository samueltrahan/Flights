const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    destAirport: {
        type: String,
    },
    arrival: {
        type: Date,
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        Dates: [],
        default: function () {
            const defaultDate = new Date();
            defaultDate.setFullYear(defaultDate.getFullYear() + 1);
            return defaultDate();
        }
    },
    destinations: [destinationSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('Flight', flightSchema);