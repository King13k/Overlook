import chai from 'chai';
const expect = chai.expect;

import bookingData from '../sample-data/bookingsData.js';
import roomData from '../sample-data/roomData.js';
import customerData from '../sample-data/customerData';
import Customer from '../src/classes/Customer';



describe('Customer', () => {
  let customer1
  let customer2


  beforeEach(() => {

    customer1 = new Customer(customerData[0]);
    customer2 = new Customer(customerData[1]);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should insantiate a new instance of a customer', () => {
    expect(customer1).to.be.an.instanceOf(Customer);
  });

  it('Should have an id', () => {
    expect(customer1.id).to.equal(1);
  });

  it('Should have a name', () => {
    expect(customer1.name).to.equal('Leatha Ullrich');
  });

  it('Should have a list of bookings', () => {
    customer1.getCustomerBookings(bookingData)
    expect(customer1.bookings.length).to.equal(1);
  });

  it('Should return total cost for rooms', () => {
    customer1.getCustomerBookings(bookingData)
    expect(customer1.getTotalSpent(roomData)).to.equal(172)
  });

  it('Should return unavailbe rooms for booking date', () => {
    customer1.bookingByDate("2022/02/05", bookingData, roomData);
    expect(customer1.bookedRooms[0]).to.equal(roomData[0]);
  });

  it('Should return available rooms by date', () => {
    customer1.bookingByDate("2022/02/05", bookingData, roomData);
    customer1.findAvailableRooms(roomData);
    console.log(roomData[0])
    expect(customer1.availableRooms[0]).to.equal(roomData[0]);
  });

// test for apology

});
