

const rooms = [
    {
        roomType: "Single Bed",
        pricePerNight: 100,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV"],
        capacity: 1,
    },
    {
        roomType: "Group Suite",
        pricePerNight: 200,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
        capacity: 6,
    },
    {
        roomType: "Deluxe Suite",
        pricePerNight: 150,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
        capacity: 2,
    },
    {
        roomType: "Couple's Suite",
        pricePerNight: 180,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
        capacity: 2,
    },
    {
        roomType: "Family Suite",
        pricePerNight: 250,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Kitchenette"],
        capacity: 8,
    }
]

const bookings = [
    {
        id: 1,
        guestName: "Marc Spector",
        roomType: "Single Bed",
        checkInDate: "2023-10-22",
        checkOutDate: "2023-10-27",
        email: "marc.spector@gmail.com",
        bookingConfirmationNumber: 105,
        status: "Confirmed",
        numberOfGuests: 1
    },
    {
        id: 2,
        guestName: "Sam Wilson",
        roomType: "Group Suite",
        checkInDate: "2023-11-01",
        checkOutDate: "2023-11-10",
        email: "sam.wilson@gmail.com",
        bookingConfirmationNumber: 106,
        status: "Pending",
        numberOfGuests: 6
    },
    {
        id: 3,
        guestName: "Benjamin Pointdexter",
        roomType: "Deluxe Suite",
        checkInDate: "2023-09-04",
        checkOutDate: "2023-09-08",
        email: "benjamin.pointdexter@gmail.com",
        bookingConfirmationNumber: 107,
        status: "Cancelled",
        numberOfGuests: 2
    },
    {
        id: 4,
        guestName: "Remy LeBeau",
        roomType: "Couple's Suite",
        checkInDate: "2023-08-13",
        checkOutDate: "2023-08-19",
        email: "remy.lebeau@gmail.com",
        bookingConfirmationNumber: 108,
        status: "Pending",
        numberOfGuests: 2
    },
    {
        id: 5,
        guestName: "Reed Richards",
        roomType: "Family Suite",
        checkInDate: "2023-12-20",
        checkOutDate: "2023-12-27",
        email: "reed.richards@gmail.com",
        bookingConfirmationNumber: 109,
        status: "Confirmed",
        numberOfGuests: 5
    }
]

module.exports = { rooms, bookings };