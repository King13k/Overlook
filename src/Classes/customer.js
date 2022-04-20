class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.totalSpent = 0;
  }

  getCustomerBookings(bookings) {
    bookings.filter(booking => {
      if(booking.userID === this.id){
        return this.bookings.push(booking)
      }
    });
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

  }

}

export default Customer;
