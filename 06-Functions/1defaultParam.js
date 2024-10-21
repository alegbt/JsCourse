'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
//   default parameters (after es6 altrimenti andavano definiti dentro la funzione con numpassenger = numpassenger || 1)
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`); //numPassenger: 1, price: 199

// overwrite dei param default
createBooking(`LH124`, 2, 400); //numPassenger: 2, price: 400

createBooking(`LH124`, 2); //numPassenger: 2, price: 398

// SKIP DEFAULT PARAM - si puo fare mettendo undefined
createBooking(`LH124`, undefined, 100); //numPassenger: 1, price: 100}
