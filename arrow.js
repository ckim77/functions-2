////////// PROBLEM 1 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}


// expression



////////// PROBLEM 2 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

// arrow


/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/

const exclaimThree = str => `${str.toUpperCase()}!!!`

// console.log(exclaimThree('wazzap'));

////////// PROBLEM 3 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// declaration


////////// PROBLEM 4 //////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

let jsNinja = () => 'I am a JavaScript ninja!';

// console.log(jsNinja());


////////// PROBLEM 5 //////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

let compareNums = (a, b) => (a >= b ? a : b);

// console.log(compareNums (4,6))
  
////////// PROBLEM 6 //////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'

    Brownie points for using a template string (again don't spend too much time figuring
    that out)
*/

let bestMovie = str => `${str} is the best movie ever!`;
// console.log(bestMovie('No Time to Die'));


// const array = [1, 4, 9, 16];

// // const map1 = array.map(x => x * 2)

// const newArr = array.map(multiplyTwo)

// function multiplyTwo(x) {
//   return x * 2
// }

// console.log(newArr)

