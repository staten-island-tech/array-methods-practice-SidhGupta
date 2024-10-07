

students.forEach((student)=> console.log(student));

const movie = {
    title: "Star Wars",
    release: 1977,
    Actors: ["Mark", "Harrison", "Carrie"],

};

const movies = [{
    title: "Star Wars",
    release: 1977,
    Actors: ["Mark", "Harrison", "Carrie"],


}]


const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];
  


movies.forEach((movie)=> console.log(movie.title));
//filter, to get a new array of mvies that match criteria.
//array name DOT Array Command then arrow function that accepts singular
//of array
const newMovies = movies.filter((movie)=> movie.release > 1990);
console.log(newMovies);

//or do this
movies
.filter((movie))