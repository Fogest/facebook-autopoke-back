var pokeBack = function(){
	if($('#content a:contains("Poke back")').length > 0) {
		console.log('Scanning for pokes...');
		$('#content a:contains("Poke back")')[0].click();
	}
}
setInterval(pokeBack,7500);