var request = require("request");
var foodSearch = $("#search-term");

// Then run a request to the NutritionIX API with the food specified
request("https://api.nutritionix.com/v1_1/search/" + foodSearch + "?results=0%3A5&cal_min=0&cal_max=50000&fields=*&appId=c3847b45&appKey=f087aae61620658bc2208ab8ecf85f99", function(error, response, body) {


  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
    // let jsonBody = JSON.parse(body)
    // Parse the body
    console.log("The Brand Name: " + JSON.parse(body).hits[0].fields.brand_name);
    console.log("Item Name: " + JSON.parse(body).hits[0].fields.item_name);
    console.log("The total calories are: " + JSON.parse(body).hits[0].fields.nf_calories);
    console.log("The total fat is: " + JSON.parse(body).hits[0].fields.nf_total_fat);
    console.log("The total cholesterol is: " + JSON.parse(body).hits[0].fields.nf_cholesterol);
    var brandName = JSON.parse(body).hits[0].fields.brand_name;
  console.log("second time brand is " + brandName)
  }
});

function updatePage(nutritionixData) {
  var numResults = $("#response-count").val();
  for (var i = 0; i < numResults; i++) {
  var result = nutritionixData.response.docs[i];
  var resultCount = i + 1;
  var $resultWell = $("<result>");
    $resultWell.addClass("well");
    $resultWell.attr("id", "result-well-" + resultCount);
    $("#well-section").append($resultWell);

    var brandName = JSON.parse(body).hits[0].fields.brand_name;
    var itemName = JSON.parse(body).hits[0].fields.item_name;
    var totCal = JSON.parse(body).hits[0].fields.nf_calories;
    var totFat = JSON.parse(body).hits[0].fields.nf_total_fat;
    var totChol = JSON.parse(body).hits[0].fields.nf_cholesterol;

    $resultWell.append(
      "<p>Brand: " + brandName + "</p>",
      "<p>Item: " + itemName + "</p>",
      "<p>Total Calories: " + totCal + "</p>",
      "<p>Total Fat: " + totFat + "</p>",
      "<p>Total Cholesterol: " + totChol + "</p>"
    );
  }
}
// function to empty the search
function clear() {
  $("#well-section").empty();
}
// CLICK HANDLERS
// ==========================================================
$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // empty the region associated with the articles
  clear();

  // build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

  // make the AJAX request to the API - GETs the JSON data at the queryURL.
  // the data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);