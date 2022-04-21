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
        let totalCost = totalCostArray.reduce((acc, room) => {
          acc += room[0].costPerNight
          return acc
        }, 0);
        console.log(totalCost)
        return  Math.trunc(totalCost)
  }

}

export default Customer;
