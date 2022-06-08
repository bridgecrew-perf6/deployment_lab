writeRandomQuote = function () {
  var quotes = new Array();
  quotes[0] = "Prabaker";
  quotes[1] = "Abdel Khader Khan";
  quotes[2] = "Linbaba";
  quotes[3] = "Karla";
  var rand = Math.floor(Math.random() * quotes.length);
  document.write(quotes[rand]);
};
writeRandomQuote();
