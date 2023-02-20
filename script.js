/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive(price) {
    let result;
    if (price > 100000000) {
      result = "MORE than 100 000 000 mln USD";
    } else if (price === 100000000) {
      //   greeting = "Good day";
      result = "EQUAL than 100 000 000 mln USD";
    } else {
      result = "LESS than 100 000 000 mln USD";
    }
    console.log(result);
    return result;
  }
}

const newMovie = new Movie("Titanic", "James Cameron", "200000000");
newMovie.wasExpensive(1000000);
console.log(newMovie);
