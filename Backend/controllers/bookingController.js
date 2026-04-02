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
    const availableRooms = rooms.filter(room => {
        if (room.roomType === roomType) {
            const isBooked = bookings.some(booking => {
                return booking.roomType === roomType &&
                    ((checkIn >= booking.checkIn && checkIn < booking.checkOut) ||
                    (checkOut > booking.checkIn && checkOut <= booking.checkOut) ||
                    (checkIn <= booking.checkIn && checkOut >= booking.checkOut));
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
        return booking.roomType === roomType &&
            ((checkInDate >= booking.checkInDate && checkInDate < booking.checkOutDate) ||
            (checkOutDate > booking.checkInDate && checkOutDate <= booking.checkOutDate) ||
            (checkInDate <= booking.checkInDate && checkOutDate >= booking.checkOutDate));

    });
    if (hasConflict) {
                return res.status(400).json({ message: "Room is not available for these chosen dates." });
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