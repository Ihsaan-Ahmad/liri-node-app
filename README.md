# Liri

Liri is like iPhone's Siri except Liri is a language interpretation and recognition interface while Siri is a voice interpretation and recognition interface. 

## Getting Started

Liri will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Prerequisites

Before running Liri, you will need your own Spotify ID and Spotify secret key in order for Liri to take in commands for Spotify.

### Installing

If you do not have a package.json file, you need to install npm assuming you have all the necessary dependencies located within the package.json file which we will cover.

```
npm install
```

Must be in terminal under the correct file location.

## Liri Commands

The following commands can be used with Liri:

```
concert-this
```
   * Name of the venue.
   * Venue location.
   * Date of the Event.

```
spotify-this-song
```
   * Artist(s) Name(s).
   * The song's name.
   * A preview link of the song from Spotify.
   * The album that the song is from.

```
movie-this
```
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


```
do-what-it-says
```
   * Runs spotify-this-song for "I Want it That Way," as follows the text in random.txt. 

## Example Screen Shots

   * [concert-this](images\concert-this.PNG) - Running concert-this with default input.
   * [spotify-this-song](images\spotify-this-song.PNG) - Running spotify-this-song with default input.
   * [movie-this](images\movie-this.PNG) - Running movie-this with default input.
   * [do-what-it-says](images\do-what-it-says.PNG) - Running do-what-it-says using random.txt file.

## Deployment

All deployment is located within the terminal via node.js.

## Built With

   * [JavaScript](https://www.javascript.com/) - Language used.
   * [axios](https://www.npmjs.com/package/axios) - Package used to retrieve data from Omdb API.
   * [dotenv](https://www.npmjs.com/package/dotenv) - Package used to set environmental variables to the global process.env object in node.js.
   * [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) - Package used for spotify API.
   * [moment](https://rometools.github.io/rome/) - Package used for moment API.

## Versioning

Must use latest version of node.js for this application.

## Acknowledgments

   * Special thanks to Shawn for fixing my code multiple times.