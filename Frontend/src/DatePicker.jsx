import React from 'react'

export default function DatePicker({ checkInDate, setCheckInDate, checkOutDate, setCheckOutDate }) {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div>
                <label className="text-gray-400 text-sm">Check-in</label>
                <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="bg-black border border-yellow-600 text-white rounded-lg p-3 w-full cursor-pointer transition duration-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className="text-gray-400 text-sm">Check-out</label>
                <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="bg-black border border-yellow-600 text-white rounded-lg p-3 w-full cursor-pointer transition duration-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
            </div>
        </div>

    )
}