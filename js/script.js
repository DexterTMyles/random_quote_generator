/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
const quotes = [
  {
    quote: "You can't be afraid to fail. It's the only way you succeed - you're not gonna succeed all the time, and I know that.",
    source: "Lebron James",
    citation: "NBA"
  },

  {
    quote: "If you only knew the magnificence of the 3, 6 and 9, then you would have the key to the universe.",
    source: "Nikola Tesla"
  },

  {
    quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    source: "Martin Luther King Jr ",
    year: "1963",
  },

  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    source: "Winston Churchill"
  },

  {
    quote: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    source: "Ray Goforth"
  },
];
console.log(quotes);
// this function return a random quote object from the `quotes` array.
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
/* Created a function to call the getrandom function and i assign it to a varible and created a empty string varibale also made 
if statement to check for the citation/year property before adding it to the HTML string
*/
function printQuote() {
  const quoteRandom = getRandomQuote();
  let html = '';
  html += "<p class='quote'>" + quoteRandom.quote + "</p>";
  html += "<p class='source'>" + quoteRandom.source;
  if (quoteRandom.citation) {
    html += "<span class='citation'>" + quoteRandom.citation + "</span>";
  }
  if (quoteRandom.year) {
    html += "<span class='year'>" + quoteRandom.year + "</span>";
  }
  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;
}
// When the Show another quote button is clicked, it will call the printquote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);