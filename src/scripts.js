// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)



console.log('This is the JavaScript entry file - your code begins here.');

//imports
import Customer from '../src/Classes/customer';
import Booking from '../src/Classes/booking';
import Room from '../src/Classes/rooms';
// import domUpdates from './domUpdates';
import {fetchData,postData} from './apiCalls';

const userDashBoard = document.querySelector('.main-dash');
const userBookingPage = document.querySelector('.dashboard');
const roomBookBtn = document.querySelector('.navBtn');
const userMessage = document.querySelector('.welcome-user');
const bookButton = document.querySelector('#book-now-btn');
const viewRooms = document.querySelector('.view-rooms');
const viewAvailableRooms = document.querySelector('.rooms-list');
const submitBtn = document.querySelector('#calendarCheckInBtn');
const roomFilterBtn = document.querySelector('#dropDownBtn')
const calendarStart = document.querySelector('#calendar-start');
const roomTypes = document.querySelector('#room-types');
const filteredBookBtn = document.querySelector('.filter-book-btn');


let customerData
let bookingData
let roomData
let customer
let date
let bookings
let type


 function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

//Event Listeners
window.addEventListener("load", function(){
  Promise.all([fetchData('customers'), fetchData('bookings'), fetchData('rooms')])
  .then(data => {
      customerData = data[0].customers
      bookingData = data[1].bookings
      roomData = data[2].rooms
      bookings = new Booking(bookingData)
      customer = new Customer(customerData[0])
      viewUserDash(customer, bookingData, roomData)
    });
});

bookButton.addEventListener("click", function() {
  hide(userDashBoard);
  show(viewRooms);
  availableRooms();
});



submitBtn.addEventListener("click", function() {
  event.preventDefault();
  getDate();
  availableRooms();
});

roomFilterBtn.addEventListener("click", function() {
  event.preventDefault();
  filterRoomTypes();
});

document.addEventListener("click", function(e) {
  if(e.target && e.target.className === 'filter-book-btn'){
    customer.bookByFilterRooms(e.target.parentElement.id)
  }

});











function viewUserDash (customer, bookings, roomData) {
  customer.getCustomerBookings(bookings)
  const total = customer.getTotalSpent(roomData)
  userMessage.innerHTML = `<h2>Welcome to Overlook Hotel ${customer.name},</h2>
  <br><h2>Total Spent: $ ${total}</h2>`
  if(customer.getCustomerBookings(bookingData).length > 0) {
    return customer.bookings.forEach(booking => {
      userBookingPage.innerHTML += `
      <section class="bookings">
      <p>Booking Information:</p>
      <p>confirmation number: ${booking.id}</p>
      <p>Booked for: ${booking.date}<p>
      <p>Room Number: ${booking.roomNumber}</p>
      </section>`
    });
  } else {
    userBookingPage.innerHTML = ''
    return userBookingPage.innerHTML ='<h1>Sorry but at this time we do not have any available space, try again later</h1>'
  };
};

function availableRooms () {
  viewAvailableRooms.innerHTML = ''
  customer.findAvailableRooms(roomData,date,bookingData)
  bookings.sortedRooms.forEach(room => {
    if(room.userID === customer.id){
    }
  });
  if (customer.availableRooms.length > 0) {
    customer.availableRooms.forEach(room => {
      viewAvailableRooms.innerHTML += `
      <section class="rooms" id=${room.number}>
      <p>Room Info:</p>
      <p class="roomNumber" id=${room.number}>room number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p># Beds: ${room.numBeds}</p>
      <p>Cost: ${room.costPerNight}</p>
      <button class="filter-book-btn">Book Now</button>
      </section>`
    })
  } else {
    viewAvailableRooms.innerHTML = ''
    return viewAvailableRooms.innerHTML =  '<h1>Sorry no available rooms for this date</h1>'
  };
};

function filterRoomTypes () {
  viewAvailableRooms.innerHTML = ''
  const type = getRoomType();
  customer.filterByType(type);
  if (customer.filteredRooms.length > 0) {
    customer.filteredRooms.forEach(room => {
      viewAvailableRooms.innerHTML += `
      <section class="rooms" id=${room.number}>
      <p>Room Info:</p>
      <p class="roomNumber" id=${room.number}>room number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p># Beds: ${room.numBeds}</p>
      <p>Cost: ${room.costPerNight}</p>
      <button class="filter-book-btn">Book Now</button>
      </section>`
    })

  } else {
    viewAvailableRooms.innerHTML =  '<h1>Sorry no available rooms for this date</h1>'
  };
};

function getRoomType () {
  const roomSelect = roomTypes.value
  return roomSelect.toLowerCase();
};

function getDate (event) {
  const calendarDate = calendarStart.value
  date = calendarDate.split('-').join('/')
  bookings.sortRoomsByDate(date)
};
