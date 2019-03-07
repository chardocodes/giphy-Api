//  get giphy API

//----------------------------------------------------
//get api key 
// var dancing = $(this).attr("data-dancing");

function getGifs(dancing) {
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Tc1puQ7vhwCKsxRp6tQCeouk1oQVJoOI&q=" + dancing + "&limit=5&offset=0&rating=PG-13&lang=en";

  // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  // dancing + "&api_key==1Tc1puQ7vhwCKsxRp6tQCeouk1oQVJoOI";

  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function (response) {
    console.log(response);
    var gif = response.data;
    // state = still;
    // console.log(response.data[i].images.original.url);
    for (var i = 0; i < gif.length; i++) {
      var img = $("<img>");
      var p = $("<p>");
      p.text("Rated: " + gif[i].rating);
      // img.attr("src", response.data[i].images.original.url);
      img.attr("src", gif[i].images.fixed_height.url, gif[i].images.fixed_height_still.url);
      $("#showGiphy").append(p, img);
    }
  });
}
function makeButtons() {
  //for every element in the array
  var danceParty = ["swing dance", "hip-hop dance", "interpretive dancing", "line dancing", "ballet dancing", "jazz dance", "salsa dancing", "kids dancing", "drunk dancing", "wedding dancing", "cartoon dancing"];
  //loop thru an array of string
  for (var i = 0; i < danceParty.length; i++) {
    //make a new button
    var btn = $("<button>");
    btn.text(danceParty[i]);
    //with a data attr of data-title
    btn.attr("data-title", danceParty[i]);
    //change data state from still to play
    // var state = still;

    //and value of the title show
    btn.addClass("btn btn-success dance-btn");
    $("#buttons").append(btn);
  }
}

makeButtons();
//-----------------------------------
//  
//listen for the click .dance button
$(document).on("click", ".dance-btn", function (event) {
  console.log("clicked on the btn");
  $("#showGiphy").empty();
  //get buttons data attr value and call the fucntion with that value
  //clear gifs from the previous page
  dance = $(this).attr("data-title");
  console.log(dance);
  getGifs(dance);


});
// i would like to change the data states
//change gif data state to still
//create an onclick function
//state being still is true
//if true, change data state to animate

