var searchFormEl = document.querySelector("#searchForm");
var searchInputEl = document.querySelector("#searchInput");
var formatEL = document.querySelector("#format");

var formSubmitHandler = function (event) {
  event.preventDefault();
  var searchURL = "./results.html?q=";
  var searchString = searchInputEl.value.replace(" ", "+");
  searchString = searchString.trim();
  console.log(searchString);
  searchURL = searchURL + searchString;
  // searchURL = searchURL + "&format=" + formatEL.value;
  console.log(searchURL);
  document.location.replace(searchURL);
};
searchFormEl.addEventListener("submit", formSubmitHandler);
