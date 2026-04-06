import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from './api'

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/api/bookings/${id}`);
            setReservations(reservations.filter(reservation => reservation.id !== id));
        } catch (err) {
            console.error('Error deleting reservation:', err);
        }
    };

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/bookings`);
                setReservations(response.data);
            } catch (err) {
                console.error('Error fetching reservations:', err);
            }
        };
        fetchReservations();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-yellow-500 font-bold text-xl mb-4">Current Reservations</h2>
            {reservations.length === 0 ? (
                <p className="text-gray-400">No reservations found.</p>
            ) : (
                <ul className="space-y-4">
                    {reservations.map((reservation) => (
                        <li key={reservation.id} className="bg-black border border-yellow-600 rounded-lg p-4">
                            <p>
                                <span className="font-bold text-yellow-500">Guest:</span>
                                    <span className="text-white">{reservation.guestName}</span>
                                
                            </p>
                            <p>
                                <span className="font-bold text-yellow-500">Room Type:</span>
                                <span className="text-white">{reservation.roomType}</span>
                            </p>
                            <p>
                                <span className="font-bold text-yellow-500">Check-in:</span>
                                <span className="text-white">{new Date(reservation.checkInDate).toLocaleDateString()}</span>
                            </p>
                            <p>
                                <span className="font-bold text-yellow-500">Check-out:</span>
                                <span className="text-white">{new Date(reservation.checkOutDate).toLocaleDateString()}</span>
                            </p>
                            <p>
                                <span className="font-bold text-yellow-500">Email:</span>
                                <span className="text-white">{reservation.email}</span>
                            </p>
                            <p>
                                <span className="font-bold text-yellow-500">Guests:</span>
                                <span className="text-white">{reservation.numberOfGuests}</span>
                            </p>
                            <button onClick={() => handleDelete(reservation.id)} className="mt-3 bg-red-700 text-white font-bold py-1 px-4 rounded-lg hover:bg-red-500 transition duration-300">Cancel Booking</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}