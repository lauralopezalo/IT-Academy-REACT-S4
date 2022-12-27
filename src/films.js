// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(movie => movie.director)
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(movie => movie.director === director)
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesArray = getMoviesFromDirector(array, director)
  let scores = moviesArray.map(movie => movie.score)
  let scoreAverage = scores.reduce((a, b) => a + b) / scores.length
  return Math.round(scoreAverage * 100) / 100
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const alphabeticArray = array.map((movies) => movies.title);
  alphabeticArray.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase())
      return -1;
    if (a.toLowerCase() > b.toLowerCase())
      return 1;
  });
  return alphabeticArray.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const newArray = [...array].sort((a, b) => {
    if (a.year < b.year)
      return -1;
    if (a.year > b.year)
      return 1;
    if (a.title.toLowerCase() < b.title.toLowerCase())
      return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase())
      return 1;
  });
  return newArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const genreMovies = array.filter((movie) => movie.genre.includes(genre));
  let moviesNoScore = 0
  const scores = genreMovies.map((movie) => {
    if (!movie.score)
      moviesNoScore++
    return movie.score;
  });
  let scoreAverage = scores.reduce((a, b) => a + b) / (scores.length - moviesNoScore);
  return Math.round(scoreAverage * 100) / 100;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
