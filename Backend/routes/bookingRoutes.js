const express = require('express');
const router = express.Router();
const { getAllbookings, getAllRooms, deleteBooking, checkAvailability, createBooking } = require('../controllers/bookingController');

router.get('/bookings', getAllbookings);
router.get('/rooms', getAllRooms);
router.delete('/bookings/:id', deleteBooking);
router.get('/availability/:checkIn/:checkOut/:roomType', checkAvailability);
router.post('/bookings', createBooking);

module.exports = router;