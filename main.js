//Title: Facebook Autopoke-back
//Author: Justin V
//Website: http://jhvisser.com
//Description: Automatically pokes back a user when they poke you.

//Main pokeback function.
var pokeBack = function(){
	if($('#content a:contains("Poke Back")').length > 0) {
		console.log('Poke found! Attempting to poke back...');
		$('#content a:contains("Poke Back")')[0].click();
	}
}
//Sets pokeback check to happen every 5 seconds.
setInterval(pokeBack,5000);
