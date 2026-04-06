import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function AvailabilityView({ selectedRoom, checkInDate, checkOutDate, setSelectedSlot }) {
    const [results, setResult] = useState(null)
    const [error, setError] = useState(null)

    const checkAvailability = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/availability/${checkInDate}/${checkOutDate}/${selectedRoom}`
            )

            if (response.data.length > 0) {
                setResult(`available`)
                setSelectedSlot(selectedRoom)
                setError('')
            } else {
                setResult('unavailable')
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to check availability. Please try again later.')
        }
    }
            

        return (
            <div className="flex flex-col gap-4">
                <button onClick={checkAvailability} className="bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg w-full md:w-1/4 hover:bg-yellow-400 transition duration-300">Check Availability</button>
                {error && <p>{error}</p>}
                {results === 'available' && (
                  <p className="text-green-400 font-semibold">✅ Room is available! Fill in your details below to book.</p>
                )}
                {results === 'unavailable' && (
                  <p className="text-red-400 font-semibold">❌ Sorry, the room is not available for the selected dates.</p>
                )}
            </div>
        )
    }


