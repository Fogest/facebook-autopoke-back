//Title: Facebook Autopoke-back
//Author: Justin V
//Website: http://jhvisser.com
//Description: Automatically pokes back a user when they poke you.

//Main pokeback function.
var pokeBack = function(){
	if($('#content a:contains("Poke back")').length > 0) {
		console.log('Poke found! Attempting to poke back...');
		$('#content a:contains("Poke back")')[0].click();
	}
}
//Sets pokeback check to happen every 7.5 seconds.
setInterval(pokeBack,7500);