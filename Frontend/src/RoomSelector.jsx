import React from 'react';

export default function RoomSelector({ selectedRoom, setSelectedRoom }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-yellow-500 font-semibold text-lg">Select Room Type</label>
            <select onChange={(e) => setSelectedRoom(e.target.value)}
            className="bg-black border border-yellow-600 text-white rounded-lg p-3 w-full md:w-1/2 cursor-pointer"
            value={selectedRoom}>
                <option value="">-- Select Room Type --</option>
                <option value="Single Bed">Single Bed - R100/night</option>
                <option value="Deluxe Suite">Deluxe Suite - R150/night</option>
                <option value="Couple's Suite">Couple's Suite - R180/night</option>
                <option value="Group Suite">Group Suite - R200/night</option>
                <option value="Family Suite">Family Suite - R250/night</option>
            </select>
        </div>
    )

}