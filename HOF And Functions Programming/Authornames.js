// Define the list of books, including their authors and publication years
const books = [
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "Catching Fire", author: "Suzanne Collins", year: 2009 },
    { title: "Mockingjay", author: "Suzanne Collins", year: 2010 },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 },
    { title: "The Girl Who Played with Fire", author: "Stieg Larsson", year: 2006 },
    { title: "The Girl Who Kicked the Hornet's Nest", author: "Stieg Larsson", year: 2007 },
    { title: "The Help", author: "Kathryn Stockett", year: 2009 },
    { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: 2010 },
    { title: "The Art of Fielding", author: "Chad Harbach", year: 2011 }
  ];
  
  // Use the filter and map higher-order functions to create a new array with the filtered and capitalized books
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({ ...book, author: book.author.toUpperCase() }));
  
  // Print the filtered and capitalized books to the console
  console.log(filteredBooks);
  