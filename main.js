
$( document ).ready(function() {   





	console.log( "ready!" );

	var arrResults = [];
	var html = '';


// Create structure for the data
function Result(title, snippet) {
	this.title = title;
	this.snippet = snippet;
}


//when search is clicked run code 
$('#Search').click(function (){ 

	var titre=$('#serach-Term').val();
 	//api url with search -term
 	var url='https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='+titre;
//api url with search -term

$.ajax( { 





	url: url,
	
	dataType: 'jsonp',
	type: 'GET',
	
	headers: { 'Api-User-Agent': 'Example/1.0' },
	cache:false,
	error:function (error){
		console.log(error);
	},
	success: function(data) {
       // do something with data
       console.log(data);

      // First we clear the children from our class to make sure no previous results are showing.
      $('.results').empty();

      // Then we also clear the array with the results before providing new information.
      arrResults.length = 0;
      var resArr = data.query.search;

      //For each result, generate the html data.
      for (var result in resArr) {
      	arrResults.push(new Result(resArr[result].title, resArr[result].snippet));
      	html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + resArr[result].title + '"target="_blank"><h3>' + resArr[result].title + '</h3><p>' + resArr[result].snippet + '</p></a></div>';

        // Displays the elements to the page
        $('.results').append(html);
    }
}



});

});

});



