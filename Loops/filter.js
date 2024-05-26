//foreach do not return anything

const myNum = [1, 23, 5, 6, 7, 89, 27];

const values = myNum.filter((num) => {
  return num > 6;
});
console.log(values);

const results = myNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((nums) => {
    return nums > 20;
  });
console.log(results);
//if you're using the scopes it is nessecery to retuen the values

const books = [
  {
    bookName: "book1",
    year: 1980,
    edition: 2010,
    genre: "Mythology",
  },
  {
    bookName: "book2",
    year: 1998,
    edition: 2008,
    genre: "Psychology",
  },
  {
    bookName: "book3",
    year: 1990,
    edition: 2000,
    genre: "Knowledge",
  },
  {
    bookName: "book4",
    year: 1969,
    edition: 2011,
    genre: "History",
  },
  {
    bookName: "book5",
    year: 1979,
    edition: 2003,
    genre: "History",
  },
];

const ResultBooks = books.filter(
  (bk) => bk.edition > 2005 && bk.genre == "History"
);
console.log(ResultBooks);
