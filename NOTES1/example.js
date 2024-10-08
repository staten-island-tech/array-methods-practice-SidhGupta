/* 
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

movies.forEach((movie)=> console.log(movie.title));
const newMovies = movies.filter((movie)=> movie.release > 1990);
console.log(newMovies);
 



const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];

const topStudents = students.filter((students)=> students.grade > 80)
console.log(topStudents)

topStudents.forEach((student) => console.log(student.name))

const youngStudents = students.filter((students) => students.age <= 21)
console.log(youngStudents)

youngStudents.forEach((student) => console.log(student.name))



 */
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
  ];


  products.forEach((product) => console.log(product.name, "$" + product.price))


  const markUpproducts = products.forEach((product) => console.log("The" + product.name, "is now $" + product.price*1.1 ))
/*   products.forEach((product) => console.log(product.name, product.price)) */
  

//filter, to get a new array of mvies that match criteria.
//array name DOT Array Command then arrow function that accepts singular
//of array

