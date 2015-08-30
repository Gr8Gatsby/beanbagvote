window.addEventListener("DOMContentLoaded", function(){
	var url = 'https://vine.co/oembed.json?id=eD5rFELn5ZP';
	console.log('initalitized');

	//var url = 'https://vine.co/oembed.json?url=https%3A%2F%2Fvine.co%2Fv%2'+id;
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readystate === 4){
	  		console.log(xhr.responseText);
		}
	}

	xhr.open("GET",url,true);
	xhr.send();
});
//https://vine.co/u/907780965202538496