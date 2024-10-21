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
  countriesContainer.style.opacity = 1;
};


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  console.log('rendererroe entered');
};


const getJSON = function(url, errorMsg = 'Something went wrong'){
  return fetch(url)
  .then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json()
  })
}

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


/*
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

*/

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
/*


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
*/






  // const getPosition = function(){
  //   return new Promise(function(resolve, reject){
  //     navigator.geolocation.getCurrentPosition(
  //       position => resolve(position),
  //        err => reject(err)
  //       )
  //       navigator.geolocation.getCurrentPosition(resolve, reject)
  //   })
  // }

  /*
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const {latitude: lat, longitude:lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=831552922856630937698x116116`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => {renderCountry(data[0])
    })
    .catch(err => console.error(`${err.message} 💥`));
};


btn.addEventListener('click', () => {
  whereAmI();
});

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
//ASYNC AWAIT

//maniera x fare la stessa cosa delle promise ma con syntactic sugar
// serve x consumare le promises
//await rimpiazza l'uso di .then e va usato in funzioni con async

//await e' lo stesso che fare questo
  //fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res);)
  //queste due line (sopra e sotto) fanno la stessa cosa
 // const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

/*
const getPosition = function(){
  return new Promise(function(resolve, reject){
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //    err => reject(err)
    //   )
      navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

//riscrittura di whereami utilizzando async await
const whereAmI = async function name() {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=831552922856630937698x116116`
    );
    if (!resGeo.ok) throw new Error(`Probklem getting location data`);

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error(`Problem getting country`);

    const data = await res.json();
    renderCountry(data[0]);
    return `you are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`something wrong ${err.message}`);
    throw err;
  }
};

// whereAmI()
//   .then(city =>console.log(`2 ${city}`))
//   .catch(err => console.error(`2 ${err.message}` ))
//   .finally(() => console.log(`3 finished gettign location `));

//funzione sopra scritta con async await

  (async function(){
    try {
      const city = await whereAmI();
      console.log(city);
    } catch (error) {
      console.error(error.message)
    }finally{
      console.log(`finished `);
    }
  })

//try catch in javascript 
// try{
//   let y = 1;
//   const x = 2;
//   x=3

// }catch(err){
//   console.error(err.message);
// }

*/


//Metodi di Promise
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//Promise.all

//permette di runnare + promise contemporaneamente,e poi ritorna i risutati in un array
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    //promise runnate 1 dopo l'altra, in questo modo ne runna una dopo la fine dell'altra
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`)

    //promise runnate tutti insieme, partono tutte insieme le promise e si risolvono
    //(tutte e 3 sono ugali, ho messo le pime 2 senza metodo ausiliare x rendere piu chiaro cosa succede)
    const data = await Promise.all([
      fetch(`https://restcountries.com/v3.1/name/${c1}`).then(response => response.json()),
      fetch(`https://restcountries.com/v3.1/name/${c2}`).then(response => response.json()),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania')
*/





////////////////////////////////////////////////////////////////////////////////////////////
//Promise.race
//ritorna la promise che si risolve prima 

//funzione con .race, ritorna il fetch piu veloce di questi 3 e non gli altri
async function fetchCountryData(c1, c2, c3) {
  try {
    const res = await Promise.race([
      fetch(`https://restcountries.com/v3.1/name/${c1}`).then(response => response.json()),
      fetch(`https://restcountries.com/v3.1/name/${c2}`).then(response => response.json()),
      fetch(`https://restcountries.com/v3.1/name/${c3}`).then(response => response.json()),
    ]);
    console.log(res[0]); 
  } catch (error) {
    console.error('Error fetching country data:', error); 
  }
}
fetchCountryData('canada', 'usa', 'mexico');



//si puo utilizzare con timeout per dare 1 tempo limite di fetch, qui x ex se non fa in tempo va nel catch

const timeout = function(sec){
  return new Promise(function(_, reject){
    setTimeout(function(){
      reject(new Error('request took too long'))
    }, sec * 1000)
  })
}
//qui faccio il fetch con getjson di 1 promise api, se non ritorna la risposta prima di timeout(1) che ci mette 1 secondo timeout ritorna un reject e vado nel catch, essendo 1 race non conta piu la prima promise xke no nsara piu fillata ne rejectata
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/italy`),
  timeout(1) 
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err))



////////////////////////////////////////////////////////////////////////////////////////////
//Promise.allSettled
//ritorna tutte le promise fillate in un array contenente oggetti (le promise)


//qui si ritorna una lista con solo quelle fillate, ignorando gli errori
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success 2'),
  getJSON(`https://restcountries.com/v3.1/name/italy`),
  fetch(`https://restcountries.com/v3.1/name/asdasdsadsad`).then(response => response.json()),
  fetch(`https://restcountries.com/v3.1/name/portugal`).then(response => response.json()),
]).then(res => console.log(res));

//in questo caso ritornerebbe solo l'errore perche va nel catch
Promise.all([
  Promise.resolve('Success all'),
  Promise.reject('Error all'),
  Promise.resolve('Success 2 all'),
]).then(res => console.log(res))
  .catch(err => console.log(err))



  ////////////////////////////////////////////////////////////////////////////////////////////
//Promise.any
//ritorna la prima fullfilled ignorando le fallite

//qui ritorna success any come promise risolta
Promise.any([
  Promise.reject('Error any'),
  Promise.resolve('Success any'),
  Promise.resolve('Success 2 any'),
]).then(res => console.log(res))
  .catch(err => console.log(err))
