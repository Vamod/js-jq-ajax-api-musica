$(document).ready(function() {
    $.ajax(
    {
         'url': 'https://flynn.boolean.careers/exercises/api/array/music',
         'method': 'GET',
         'success': function(arrObj){
                  console.log(arrObj);
                  
                  for (var i = 0; i < arrObj.length; i++) {
                     leggiDati(arrObj.poster);


                  }
         },
         'error':function(){
           alert('errore!');
         }
    }
    )
});

function leggiDati (d){
	var source = $('#entry-template').html();
	var template = Handlebars.compile(source);

	var html = template(d);
	$('.cds-container').append(html);
}
