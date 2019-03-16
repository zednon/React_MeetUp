

   
    var queryURL ="https://api.meetup.com/2/events?key=711b1c41327ea3e2f1d2044b454361&group_urlname=TGTSNBN" ;
      
    var key = "711b1c41327ea3e2f1d2044b454361"
    
  $.ajax({
          url: queryURL,
          method: "GET"
        })
  
          .then(function(response) {
            $("#EventUpComing").html(response.results[0].description);
            $("#EventUpComing1").html(response.results[1].description);
            console.log(response)
          });

     