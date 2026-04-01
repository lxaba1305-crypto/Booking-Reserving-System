const express = require('express');
const router = express.Router();
const { getAllbookings, getAllRooms } = require('../controllers/bookingController');

router.get('/bookings', getAllbookings);
router.get('/rooms', getAllRooms);

module.exports = router;