import {postData} from '../apiCalls'

class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.availableRooms = [];
    this.bookedRooms = [];
    this.filteredRooms = [];
    this.totalSpent = 0;
    this.apology = `Sorry at this time we are currently booked up!`
  }

  getCustomerBookings(bookingData) {
    bookingData.forEach(item => {
      if(item.userID === this.id){
       this.bookings.push(item)
      }
    });
    return this.bookings
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
    this.bookedRooms = bookings.reduce((acc,booking) => {
      if(booking.date === date){
      roomData.find(room => {
        if(booking.roomNumber === room.number){
          acc.push(room)
        }
      });
      }
      return acc;
    },[]);
  };

  findAvailableRooms(roomData,date,bookings) {
    this.bookingByDate(date, bookings, roomData)
    const unavailableRooms = this.bookedRooms.map(eachBooking => {
      return eachBooking.number
    })
    const getAvailableRooms = roomData.reduce((acc, room) => {
        if(!unavailableRooms.includes(room.number)) {
          acc.push(room)
        }
      return acc;
    },[]);
    this.availableRooms = getAvailableRooms;
  };

  filterByType(type) {
  const roomsByType = this.availableRooms.filter(room => {
    return room.roomType === type

    })
     this.filteredRooms = roomsByType;
  }

  bookByFilterRooms(roomId) {
    console.log('Date:',new Date().toLocaleDateString('en-ZA'))
    console.log('Customer Id',this.id)
    const todayDate = new Date().toLocaleDateString('en-ZA')
    const data = {
      userID: this.id,
      date: todayDate,
      roomNumber: roomId
    };
    postData(data);
  }




}

export default Customer;
