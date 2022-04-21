import chai from 'chai';
const expect = chai.expect;

import roomData from '../sample-data/roomData.js';
import Room from '../src/Classes/rooms.js'

describe('Room', () => {
  let room1
  let room2

  beforeEach(() => {

    room1 = new Room(roomData[0]);
    room2 = new Room(roomData[1]);
  });

  it('Should be a function', () => {
    expect(Room).to.be.a('function')
  });

  it('Should insantiate a new instance of a room', () => {
    expect(room1).to.be.an.instanceOf(Room);
  });

  it('Should have a room number', () => {
    expect(room1.number).to.equal(12);
  });

  it('Should have a room type', () => {
    expect(room1.roomType).to.equal("single room");
  });

  it('Should check for bidet', () => {
    expect(room1.bidet).to.equal(false);
  });

  it('Should check for bed size', () => {
    expect(room1.bedSize).to.equal("twin")
  });

  it('Should check for number of beds', () => {
    expect(room1.numBeds).to.equal(2);
  });

  it('Should have a cost per night', () => {
    expect(room1.costPerNight).to.equal(172.09);
  });
});
