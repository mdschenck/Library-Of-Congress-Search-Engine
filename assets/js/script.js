var searchFormEl = document.querySelector("#searchForm");
var searchInput = document.querySelector("#searchInput");

function addEventListeners() {
  searchFormEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var searchTerm = searchFormEl.value;
    var format = formats.value;

    document.location.replace(
      "/results.html?q=" + searchTerm + "&format=" + format
    );
  });
}
