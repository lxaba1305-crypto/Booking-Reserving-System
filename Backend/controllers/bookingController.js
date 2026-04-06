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

const checkAvailability = (req, res) => {
    const { checkIn, checkOut, roomType } = req.params;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const availableRooms = rooms.filter(room => {
        if (room.roomType === roomType) {
            const isBooked = bookings.some(booking => {

                const bookingCheckIn = new Date(booking.checkInDate);
                const bookingCheckOut = new Date(booking.checkOutDate);
                return booking.roomType === roomType &&
                    (checkInDate < bookingCheckOut && checkOutDate > bookingCheckIn);
            });
            return !isBooked;
        }
        return false;
    });
    res.json(availableRooms);
}

const createBooking = (req, res) => {

    const { guestName, roomType, checkInDate, checkOutDate, email, numberOfGuests } = req.body;

    const room = rooms.find(room => room.roomType === roomType);
    if (!room) {
        return res.status(404).json({ message: 'Room Type not found.' });
    }

    const capacity = room.capacity;
    if (numberOfGuests > capacity) {
        return res.status(400).json({ message: `Number of guests exceeds room capacity of ${capacity}.` });
    }

    const hasConflict = bookings.some(booking => {
        const bookingCheckIn = new Date(booking.checkInDate);
        const bookingCheckOut = new Date(booking.checkOutDate);
        const newCheckIn = new Date(checkInDate);
        const newCheckOut = new Date(checkOutDate);
        return booking.roomType === roomType &&
            (newCheckIn < bookingCheckOut && newCheckOut > bookingCheckIn);
    });

    if (hasConflict) {
        return res.status(400).json({ message: 'Selected room is not available for the chosen dates.' });
    }
    

    const newBooking = {
        id: bookings.length + 1,
        guestName,
        roomType,
        checkInDate,
        checkOutDate,
        email,
        numberOfGuests,
        status: "Confirmed",
        bookingConfirmationNumber: "CONF" + (bookings.length + 1)
    };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
}


module.exports = { getAllbookings, getAllRooms, deleteBooking, checkAvailability, createBooking };