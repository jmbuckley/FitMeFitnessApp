var request = require("request");
var foodSearch = "starbucks";

// Then run a request to the OMDB API with the food specified
request("https://api.nutritionix.com/v1_1/search/" + foodSearch + "?results=0%3A5&cal_min=0&cal_max=50000&fields=*&appId=c3847b45&appKey=f087aae61620658bc2208ab8ecf85f99", function(error, response, body) {


  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
    let jsonBody = JSON.parse(body)
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The Brand Name: " + JSON.parse(body).hits[0].fields.brand_name);
    console.log("Item Name: " + JSON.parse(body).hits[0].fields.item_name);
    console.log("The total calories are: " + JSON.parse(body).hits[0].fields.nf_calories);
    console.log("The total fat is: " + JSON.parse(body).hits[0].fields.nf_total_fat);
    console.log("The total cholesterol is: " + JSON.parse(body).hits[0].fields.nf_cholesterol);
  }
});