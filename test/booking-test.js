import chai from 'chai';
const expect = chai.expect;

import bookingData from '../sample-data/bookingsData.js';
import Booking from '../src/classes/Booking';


describe('Booking', () => {
  let booking1


beforeEach (() => {

  booking1 = new Booking(bookingData[0])
});

it('Should be a function', () => {
  expect(Booking).to.be.a('function');
});

it('Should insantiate a new instance of a booking', () => {
  expect(booking1).to.be.an.instanceOf(Booking);
});

it('Should have an id', () => {
  expect(booking1.id).to.equal("5fwrgu4i7k55hl6t8");
});

it('Should have a userID', () => {
  expect(booking1.userID).to.equal(1)
});

it('Should have a date', () => {
  expect(booking1.date).to.equal("2022/02/05")
});

it('Should have a room number', () => {
  expect(booking1.roomNumber).to.equal(12)
  });
});
