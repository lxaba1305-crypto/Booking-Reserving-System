import React from "react";
import axios from "axios";
import { useState } from "react";

export default function BookingForm({selectedSlot, checkInDate, checkOutDate}) {

    const [guestName, setGuestName] = useState('');
    const [email, setEmail] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [message, setMessage] = useState('');
    
    const handleBooking = async () => {
        try {
            await axios.post('http://localhost:3000/api/bookings', {
                guestName,
                roomType: selectedSlot,
                checkInDate,
                checkOutDate,
                email,
                numberOfGuests
            });
            setMessage('Booking successful! We look forward to hosting you.');
            } catch (err) {
            setMessage(err.response?.data?.message || 'Booking failed. Please try again later.');
        }
    }
    return (
        <div className="flex flex-col gap-4 border border-yellow-600 rounded-lg p-6">
            <h2 className="text-yellow-500 font-bold text-xl">Complete Your Booking</h2>
            <p className="text-gray-400">Room: {selectedSlot} | Check-in: {checkInDate} | Check-out: {checkOutDate}</p>
            {/* Additional form fields for user details can be added here */}
  <input 
  type="text"
  placeholder="Full Name"
  value={guestName}
  onChange={(e) => setGuestName(e.target.value)}
    className="bg-black border border-yellow-600 text-white rounded-lg p-3 w-full cursor-pointer transition duration-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
  />
    <input
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="bg-black border border-yellow-600 text-white rounded-lg p-3 w-full cursor-pointer transition duration-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
  />
  <input
    type="number"
    placeholder="Number of Guests"
    value={numberOfGuests}
    onChange={(e) => setNumberOfGuests(e.target.value)}
    className="bg-black border border-yellow-600 text-white rounded-lg p-3 w-full cursor-pointer transition duration-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
  />
  <button onClick={handleBooking} className="bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg w-full md:w-1/4 hover:bg-yellow-400 transition duration-300">Confirm Booking</button>
  {message && <p className={message.includes('successful') ? 'text-green-400' : 'text-red-400'}>{message}</p>}
        </div>
    )
}