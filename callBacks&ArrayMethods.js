// ============================
// forEach Method
// ============================
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (x){
    console.log(x * x);
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el) 
    }
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach()
numbers.forEach(function (print) {
    if (print % 2 === 0){
    console.log(print)
    }
});
// ===========
// for of
// ===========
for(let print of numbers) {
    console.log(print);
}

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function(movies){
    // console.log(movies)
    console.log(`${movies.title} - ${movies.score}/100`)
})

const title = movies.map(function (movies) {
    return movies.title.toUpperCase();
})

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function (fullNames) {
    console.log(`${fullNames.first}`)
    return fullNames.first;
})
// ============================================
// ARROW Function
// ============================================

const add =(x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

const greet = (Name) => {
    return `Hey ${Name}!`;
};
console.log(greet("Hagrid"));
console.log(greet("Luna"));

// =====================================
// IMPLICIT RETURN WITH ARROW FUNCHION work only with one value
// =====================================
const rollDie = () => (
    Math.floor(Math.random() * 6) +1
);
// OR//
const add = (a, b) => a + b;

const movies = [
        {
            title: 'Amadeus',
            score: 99
        },
        {
            title: 'Stand By Me',
            score: 85
        },
        {
            title: 'Parasite',
            score: 95
        },
        {
            title: 'Alien',
            score: 90
        }
]
const films = movies.map(function(movie){
    return `${movie.title} - ${movie.score / 5}`
});
const films = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
));









