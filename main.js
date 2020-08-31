$(document).ready(function() {
    $.ajax(
    {
         'url': 'https://flynn.boolean.careers/exercises/api/array/music',
         'method': 'GET',
         'success': function(arrObj){
                    // console.log(arrObj);
                    // console.log(arrObj.response);

                    var arr = arrObj.response;

                  for (var i = 0; i < arr.length; i++) {
                     console.log(arr[i]);
                     leggiDati(arr[i]);
                 }

                 $('#pop').click(function(){
                     $('.cd').hide();
                     var i = 0;

                     while (i < arr.length){
                         var genere = arr[i].genre;
                            if(genere == 'Pop'){
                                leggiDati(arr[i]);
                            }

                         i++;
                     }
                 });

                 $('#rock').click(function(){
                     $('.cd').hide();
                     var i = 0;

                     while (i < arr.length){
                         var genere = arr[i].genre;
                            if(genere == 'Rock'){
                                leggiDati(arr[i]);
                            }

                         i++;
                     }
                 });

                 $('#metal').click(function(){
                     $('.cd').hide();
                     var i = 0;

                     while (i < arr.length){
                         var genere = arr[i].genre;
                            if(genere == 'Metal'){
                                leggiDati(arr[i]);
                            }

                         i++;
                     }
                 });

                 $('#jazz').click(function(){
                     $('.cd').hide();
                     var i = 0;

                     while (i < arr.length){
                         var genere = arr[i].genre;
                            if(genere == 'Jazz'){
                                leggiDati(arr[i]);
                            }

                         i++;
                     }
                 });

                 $('#all').click(function(){
                     $('.cd').hide();

                       for (var i = 0; i < arr.length; i++) {
                          console.log(arr[i]);
                          leggiDati(arr[i]);
                      }


                 });


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
