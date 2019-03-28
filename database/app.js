
// Loads results onto the page
// function getResults() {
    // Empty any results currently on the page
    // $("#results").empty();
    // Grab all of the current notes
    // $.getJSON("/all", function(events) {
      // For each note...
    //   for (var i = 0; i < events.length; i++) {
        // ...populate #results with a p-tag that includes the note's title and object id
//         $("#results").prepend("<p class='events-entry' data-id=" + data[i]._id + "><span class='dataTitle' data-id=" +
//           data[i]._id + ">" + data[i].title + "</span><span class=delete>X</span></p>");
//       }
//     });
//   }
  
  // Runs the getResults function as soon as the script is executed
//   getResults();
  
  // When the #make-new button is clicked
  $(document).on("click", "#make-new", function() {
    // AJAX POST call to the submit route on the server
    // This will take the data from the form and send it to the server
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/submit",
      data: {
        title: $("#Name_Of_Company").val(),
        note: $("#Loction").val(),
        note: $("#Phone_Number").val(),
        note: $("#email_Address").val(),
        note: $("#website").val(),
        note: $("#Discription_of_the_event").val(),
        created: Date.now()
      }
    })
    // If that API call succeeds, add the title and a delete button for the note to the page
    //   .then(function(data) {
      // Add the title and delete button to the #results section
        // $("#results").prepend("<p class='data-entry' data-id=" + data._id + "><span class='dataTitle' data-id=" +
        // data._id + ">" + data.title + "</span><span class=delete>X</span></p>");
        // Clear the note and title inputs on the page
        // $("#note").val("");
        // $("#title").val("");
    //   });
  });
  
  // When the #clear-all button is pressed
  $("#clear").on("click", function() {
    // Make an AJAX GET request to delete the notes from the db
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "/clearall",
      // On a successful call, clear the #results section
      success: function(response) {
        $("#results").empty();
      }
    });
  });
  
  

  // When user click's on note title, show the note, and allow for updates
//   $(document).on("click", ".dataTitle", function() {
    // Grab the element
    // var selected = $(this);
    // Make an ajax call to find the note
    // This uses the data-id of the p-tag, which is linked to the specific note
    // $.ajax({
    //   type: "GET",
    //   url: "/find/" + selected.attr("data-id"),
    //   success: function(data) {
        // Fill the inputs with the data that the ajax call collected
        // $("#note").val(data.note);
        // $("#title").val(data.title);
        // Make the #action-button an update button, so user can
        // Update the note s/he chooses
//         $("#action-button").html("<button id='updater' data-id='" + data._id + "'>Update</button>");
//       }
//     });
//   });
  