var searchResults = document.querySelector("#searchResults");

var searchResults = function (event) {
  for (i = 0; i < 15; i++) {
    var displayResults = document.createElement("tr");
    displayResults.setAttribute("class", "row");
    displayResults.innerHTML =
      // ${*** INSERT RESULTS HERE?}

      `
        <div class="searchResultsCard">
        <div class="card-header">
        <h2>This is an example search result</h2>
        </div>
        <div class="card-body">
        <p>Example search results Example search results Example search results Example search results Example search results Example search results Example search results Example search results  </p>
        </div>
        </div>
      `;
    searchResults.append(displayResults);
  }
};
