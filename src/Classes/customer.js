class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.availableRooms = [];
    this.bookedRooms = [];
    this.totalSpent = 0;
    this.apology = `Sorry at this time we are currently booked up!`
  }

  getCustomerBookings(bookings) {
    bookings.filter(booking => {
      if(booking.userID === this.id){
        return this.bookings.push(booking)
      }
    });
      if(this.bookings.length === 0){
        return this.apology;
      }
  }

  getTotalSpent(roomData) {
    let totalCostArray = this.bookings.map(booking => {
          let foundRoom = roomData.filter(room => {
            if(room.number === booking.roomNumber){
              return room;
            }
          })
          return foundRoom;
        })
        let totalCost = totalCostArray.reduce((acc, room) => {
          acc += room[0].costPerNight
          return acc
        }, 0);
        return  Math.trunc(totalCost)
  };

  bookingByDate(date, bookings, roomData) {
    bookings.filter(booking => {
      if(booking.date === date){
      roomData.find(room => {
        if(booking.roomNumber === room.number){
          return this.bookedRooms.push(room)
        }
      });
      }
    });
  };

  findAvailableRooms(roomData) {
    this.availableRooms = roomData.reduce((acc, room) => {
      if(room.number !== this.bookedRooms.roomNumber) {
        acc.push(room)
      }
      return acc;
    },[]);
  };

}

export default Customer;
