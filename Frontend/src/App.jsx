import React from 'react'
import RoomSelector from './RoomSelector'
import BookingForm from './BookingForm'
import AvailabilityView from './AvailabilityView'
import DatePicker from './DatePicker'
import ReservationList from './ReservationList'
import { useState } from 'react'  
import './App.css'

function App() {
  const [selectedRoom, setSelectedRoom] = useState('')
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState(null)

  return (
     <div className="min-h-screen bg-black text-white">
      <header className="border-b border-yellow-600 py-6 px-8">
      <h1 className="text-3xl font-bold text-yellow-500 tracking-widest">NOIR HOTEL & SUITES</h1>
      <p className="text-gray-400 text-sm mt-1">Luxury Redefined</p>
      </header>

      <main className="max-w-5xl mx-auto p-8 py-10 space-y-10">
        <RoomSelector selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
        <DatePicker 
          checkInDate={checkInDate} 
          setCheckInDate={setCheckInDate} 
          checkOutDate={checkOutDate} 
          setCheckOutDate={setCheckOutDate} 
        />
        <AvailabilityView 
          selectedRoom={selectedRoom} 
          checkInDate={checkInDate} 
          checkOutDate={checkOutDate} 
          setSelectedSlot={setSelectedSlot}
        />

        {selectedSlot && 
        <BookingForm 
          selectedSlot={selectedSlot} 
          checkInDate={checkInDate} 
          checkOutDate={checkOutDate} 
        />
        }
        <ReservationList />
      </main>
     </div>
  )
}

export default App
