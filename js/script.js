// Read more about JQuery on the docs here https://devdocs.io/jquery/


$( document ).ready( function(){

  $( ".button" ).hover( function(){

	$( ".button" ).css( "background-color", "darkblue", 0.2 )  

 })


  $( ".button" ).mouseleave( function(){

	$( ".button" ).css( "background-color", "#3d5af1" )  

 })

  document.body.style.overflow = "hidden";
  
})