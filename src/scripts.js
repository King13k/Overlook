// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)



console.log('This is the JavaScript entry file - your code begins here.');

//imports
import Customer from '../src/Classes/customer.js';
import Booking from './src/Classes/booking.js';
import Room from './src/Classes/rooms.js';


// Query Selectors
const userDashBoard = document.querySelector('.main-dash');
const roomBookBtn = document.querySelector('.navBtn');
const userMessage = document.querySelector('welcome-message');
