const { rooms, bookings } = require('../PersonalInfo');

const getAllbookings = (req, res) => {
    res.json(bookings);
}

const getAllRooms = (req, res) => {
    res.json(rooms);
}

module.exports = { getAllbookings, getAllRooms };