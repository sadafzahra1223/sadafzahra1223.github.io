
var scriptURL = 'https://script.google.com/macros/s/AKfycbxgAa_1WLt4H2oZexdJYKCUrjStDHCsTZdtCl_htaEjOngwjnPjjDXiJaa24-pULflS/exec'
        
        var time = Date.now(); //timestamp('YYYY/MM/DD:mm:ss')
        
 	fetch(scriptURL, { method: 'POST',
            crossDomain: true,
             body: JSON.stringify({name:document.title, time: time})})
	     

