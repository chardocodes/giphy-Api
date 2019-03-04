// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
//    * We chose animals for our theme, but you can make a list to your own liking.

//  get giphy API

//----------------------------------------------------
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=Tc1puQ7vhwCKsxRp6tQCeouk1oQVJoOI";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
});

// var giphyDiv = $("<div class='giphy'>");

// //Storing the rating data
// var rating = response.Rated;
// //Creating an element to have the rating displayed
// var pOne = $("<p>").text("Rating: " + rating);

// //Displaying the rating
// giphyDiv.append(pOne);
// console.log(giphyDiv);


// // Retrieving the URL for the image
//     var imgURL = response.Poster;

// // Creating an element to hold the image
// var image = $("<img>").attr("src", imgURL);

//  // Appending the image
// giphyDiv.append(image);

//  // Putting the giphy with the other giphys
//  $("#giphyView").apend(giphyDiv);
//------------------------------------------------------
//FOR ADDING THE SEARCH/ADD GIF BUTTON

/* <form id="movie-form">
      <label for="movie-input">Add a Movie, Yo!</label>
      <input type="text" id="movie-input"><br>

      <!-- Button triggers new movie to be added -->
      <input id="add-movie" type="submit" value="Add a Movie, Yo!">
    </form>


Creating a div to hold the giphy


//--------------------------------------------------------
//RETRIEVING THE GIPHY IMAGES




//--------------------------------------------------------

// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page. */
