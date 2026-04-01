const { rooms, bookings } = require('../PersonalInfo');

const getAllbookings = (req, res) => {
    res.json(bookings);
}

const getAllRooms = (req, res) => {
    res.json(rooms);
}

const deleteBooking = (req, res) => {
    const Id = Number(req.params.id);
    const Index = bookings.findIndex(booking => booking.id === Id);

    if (Index !== -1) {
        bookings.splice(Index, 1);
        res.json({ message: `Booking with ID ${Id} has been deleted.` });
    } else {
        res.status(404).json({ message: `Booking with ID ${Id} not found.` });
    }
}

module.exports = { getAllbookings, getAllRooms, deleteBooking };