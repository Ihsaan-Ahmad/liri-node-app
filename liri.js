//variables
require('dotenv').config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var fs = require('fs');
var moment = require('moment');
var action = process.argv[2];
var value = process.argv.slice(3).join(' ');

switch (action) {
  case 'concert-this':
    concertThis();
    break;
  case 'spotify-this-song':
    spotifyThisSong();
    break;
  case 'movie-this':
    movieThis();
    break;
  case 'do-what-it-says':
    doWhatItSays();
    break;
}
function concertThis() {
  var artist = value;
  console.log(artist);
  axios.get(
    'https://rest.bandsintown.com/artists/' +
    artist +
    '/events?app_id=codingbootcamp'
  )
    .then(function (response) {
      console.log('Concert Info');
      console.log('Venue: ' + response.data[0].venue.name);
      console.log('City: ' + response.data[0].venue.city);
      console.log(
        'Date: ' + moment(response.data[0].datetime).format('MM / DD / YYYY')
      );
      console.log(
        'https://rest.bandsintown.com/artists/' +
        artist +
        '/events?app_id=codingbootcamp'
      );
    });
}
function movieThis() {
  if (!value) {
    value = "Mr. Nobody";
  }
  axios.get('http://www.omdbapi.com/?t=' + value + '&y=&plot=short&apikey=trilogy')
    .then(function (response) {
      console.log('Movie Info');
      console.log('Movie Title: ' + response.data.Title);
      console.log('Movie Year Released: ' + response.data.Year);
      console.log('IMDB Rating: ' + response.data.imdbRating);
      console.log('Rotten Tomato Rating: ' + response.data.Ratings[1].Value);
      console.log('Country Produced In: ' + response.data.Country);
      console.log('Language: ' + response.data.Language);
      console.log('Actors: ' + response.data.Actors);
      console.log('Plot: ' + response.data.Plot);
      console.log(
        'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy'
      );
    });
}
function spotifyThisSong() {
  if (!value) {
    value = "The Sign US Album";
  }
  spotify.search({ type: 'track', query: value }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log('Artist Name: ' + data.tracks.items[0].artists[0].name);
    console.log('Song Name: ' + data.tracks.items[0].name);
    console.log('Album Name: ' + data.tracks.items[0].album.name);
    console.log(data.tracks.items[0].album.external_urls);
  });
}

function doWhatItSays() {
  var contents = fs.readFileSync('random.txt', 'utf8');
  console.log(contents);
}