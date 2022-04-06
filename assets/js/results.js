var searchInputEl = document.querySelector("#resultsPgSearchInput");
var formatEL = document.querySelector("#format");
var searchResults = document.querySelector("#searchResults");
var paramsString = document.location.search;
var searchParams = new URLSearchParams(paramsString);
var searchQ = searchParams.get("q");
var searchURL = "./search-results.html?q=";
var searchString = searchInputEl.value.replace(" ", "+");
function init() {
  searchString = searchString.trim();
  getLibraryAPI();
}
var renderResults = function (data) {
  var results = data["results"];
  var resultHeaderEL = document.createElement("div");
  resultHeaderEL.innerHTML = `<h2 color="white">Showing Results for "${searchQ}"</h2>`;
  searchResults.appendChild(resultHeaderEL);
  for (var i = 0; i < results.length; i++) {
    var title = results[i].title;
    var date = results[i].timestamp;
    var subject = results[i].subject;
    var description = results[i].description;
    var readMore = results[i].id;
    var cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = `<div class="card-header"><h2>${title}</h2></div>
      <div><h3>${subject} - ${date}</h3></div>
      <div class="card-body"><p> ${description} </p></div>
      <div><a href="${readMore}" target="top">Read More</a></div>`;
    searchResults.appendChild(cardEl);
  }
};
function getLibraryAPI() {
  var apiUrl = "https://www.loc.gov/search/?" + searchParams + "&fo=json";
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        renderResults(data);
      });
    } else {
      document.location.replace("./index.html");
    }
  });
}
function listen() {
  searchFormEl.addEventListener("submit", getLibraryApi);
}
init();
