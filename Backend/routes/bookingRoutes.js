const express = require('express');
const router = express.Router();
const { getAllbookings, getAllRooms, deleteBooking } = require('../controllers/bookingController');

router.get('/bookings', getAllbookings);
router.get('/rooms', getAllRooms);
router.delete('/bookings/:id', deleteBooking); 

module.exports = router;