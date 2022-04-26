class Booking {
  constructor(bookingData) {
    this.data = bookingData;
    this.id = bookingData.id;
    this.userID = bookingData.userID;
    this.date = bookingData.date;
    this.sortedRooms = [];
    this.roomNumber = bookingData.roomNumber;
  }


    sortRoomsByDate(dateInput) {
  const roomsByDate = this.data.filter(booking => {
      return booking.date === dateInput
      })
      this.sortedRooms = roomsByDate;
      return roomsByDate;
    }
}

export default Booking;
