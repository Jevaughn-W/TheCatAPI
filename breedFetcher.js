const request = require('request');
const breedToQuery = process.argv;
breedToQuery.splice(0,2);

const baseApiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

// console.log(breedToQuery[0]); // check that the arrray has been altered successfully

request(baseApiUrl + breedToQuery[0], (err, response, body) => { // all three arguments are needed
  if (err) {
    console.log('Error', err);
  } else {
    // console.log('Status Code', response.statusCode); // Give the result of the http request
    // console.log(typeof body); // Checking that the body is a JSON
    const data = JSON.parse(body); // Converting from JSON to an object
    // console.log( typeof data); // Checking that the conversion was succesful
    if (data[0] === undefined) {
      console.log('Cat breed not found, description is unavailable');
    } else {
      console.log(data[0].description);
    }
  }
});