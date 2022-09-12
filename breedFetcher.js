const request = require('request');

const baseApiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

// console.log(breedToQuery[0]); // check that the arrray has been altered successfully

const fetchBreedDescription = function(breedName, callback) {
  
  request(baseApiUrl + breedName, (err, response, body) => { // all three arguments are needed
    let description;
    let error;
    if (err) {
      error = err;
      callback(error, description);
    } else {
      // console.log('Status Code', response.statusCode); // Give the result of the http request
      // console.log(typeof body); // Checking that the body is a JSON
      const data = JSON.parse(body); // Converting from JSON to an object
      // console.log( typeof data); // Checking that the conversion was succesful
      if (data[0] === undefined) {
        // console.log('Cat breed not found, description is unavailable');
        error = "Cat breed not found, description is unavailable.";
        callback(error, description);
      } else {
        // console.log(data[0].description);
        description = data[0].description;
        callback(err, description);
      }
    }
  });

};


module.exports = { fetchBreedDescription };