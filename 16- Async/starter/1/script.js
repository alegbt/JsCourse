'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

//////////////////////////////////////////////////////////////////////
//AJAX XMLHttpRequest (maniera vecchia)

// const getCountryAndNeighbour = function (country) {
//   //AJAX 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); //responsetext e' built in in XMLHttpRequest object, contiene la risposta della chiamata
//     console.log(data);
//     renderCountry(data);
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;

//     //AJAX 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//       const data2 = JSON.parse(this.responseText)
//       console.log(data2[0]);
//       renderCountry(data2[0], 'neighbour')
//     })

//   });
// };
// getCountryAndNeighbour('usa');

//////////////////////////////////////////////////////////////////////
//Promises

//Base version
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };


//Arrow function
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) =>renderCountry(data[0]));
// };


//Chaining promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })       //il valore ritornato dall'ultimo .then e' quello passato al .then successivo, quindi alla riga sotto passo il return del fetch
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
// };




//Error handling
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if(!response.ok) throw new error(`Country not found (${response.status})`)
//       return response.json()
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = 'asdasd';
//       // const neighbour = data[0].borders[0];

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0], 'neighbour')
//       console.log(data[0]);
//     })
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Some error ${err}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('italy');
// });


//Error handlig with helper function

const getJSON = function(url, errorMsg = 'Something went wrong'){
  return fetch(url)
  .then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json()
  })
}

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      
      const neighbour = data[0].borders ? data[0].borders[0] : null;

      if (!neighbour) throw new Error('No neighbour');
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
      console.log(data[0]);
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`Some error ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});



////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////




//Callback order

//Ordine in cui viene risolto il call stack:
//i non callback per primi, successivamente le Promise (micro task queue) e infine i callback

/*
//1
console.log('test start');

//5
setTimeout(() => console.log('timer 0 sec'), 0);

//3
Promise.resolve('Resolved promise 1')
.then(res => {
  console.log(res);
})

//2
console.log('Test end');

//4
Promise.resolve('Resolved promise 2')
.then(res => {
  for(let i = 0; i < 10000; i++){
    console.log(res);
  }
})
  */




////////////////////////////////////////////////////////////////////////////////////////////////

//Creating Promises
//in 1 promise il primo param e' una funzione che si esegue quando si risolve,
// il secondo e' la funzione reject che si esegue quando fallisce, va catturato x displayare l'errore
const lotteryPromise = new Promise(function (resolve, reject) {
  let num = Math.random();
  console.log(num);
  if (num >= 0.5) {
    resolve('you win');
  } else {
    reject(new Error('you lost'));
  }
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));





// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));


//Creating a resolved Promise

Promise.resolve('abc').then(x => console.log(x)); //print abc
Promise.reject(new Error('error asd')).catch(x => console.log(x)); //print error asd