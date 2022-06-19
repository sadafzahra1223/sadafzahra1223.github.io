
       
var time = Date.now(); //timestamp('YYYY/MM/DD:mm:ss')

console.log('test axios')

axios.post('https://sheetdb.io/api/v1/rw00c59mbwfd3',{
        "data": {"time": "value1", "title": document.title, "time": time}
    }).then( response => {
        console.log(response.data);
    });
 
 /*   
 var scriptURL = 'https://script.google.com/macros/s/AKfycbxgAa_1WLt4H2oZexdJYKCUrjStDHCsTZdtCl_htaEjOngwjnPjjDXiJaa24-pULflS/exec'
     
fetch(scriptURL, { method: 'POST',
    crossDomain: true,
     body: JSON.stringify({name:document.title, time: time})})
     */
	     

