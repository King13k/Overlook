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
import {fetchData} from './apiCalls';


let customerData
let bookingData
let roomData
let customer



//Event Listeners
window.addEventListener("load", function(){
  Promise.all([fetchData('customers'), fetchData('bookings'), fetchData('rooms')])
  .then(data => {
      customerData = data[0].customers
      bookingData = data[1].bookings
      roomData = data[2].rooms
      customer = new Customer(customerData[0])
      viewUserDash(customer, bookingData, roomData)
    })


  // domUpdates.viewUserDash(customers, booking, roomData)
});
const userDashBoard = document.querySelector('.main-dash');
const userBookingPage = document.querySelector('.dashboard');
const roomBookBtn = document.querySelector('.navBtn');
const userMessage = document.querySelector('.welcome-user');




function viewUserDash (customer, bookings, roomData) {
  customer.getCustomerBookings(bookings)
  const total = customer.getTotalSpent(roomData)
  userMessage.innerHTML = `<h2>Welcome to Overlook Hotel ${customer.name},</h2>
  <br><h2>Total Spent: $ ${total}</h2>`
  if(customer.getCustomerBookings.length > 0) {
    return customer.bookings.forEach(booking => {
      userBookingPage.innerHTML += `
      <section class="bookings">
      <p>Booking Information:</p>
      <p>confirmation number: ${booking.id}</p>
      <p>Booked for: ${booking.date}<p>
      <p>Room Number: ${booking.roomNumber}</p>
      </section>`
    })
  } else {
    userBookingPage.innerHTML = ''
    return userBookingPage.innerHTML ='<h1>Sorry but at this time we do not have any available space, try again later</h1>'
  }
};
