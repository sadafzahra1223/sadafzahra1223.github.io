import Head from 'next/head'

import Post from '../components/post'
let fs = require('fs')
const timestamp = require('time-stamp')
import Script from 'next/script'
const axios = require('axios');

export async function getStaticProps() {

  // fetch list of posts
  /*
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  
  const postList = await response.json()
  */
  
  const postList = JSON.parse(fs.readFileSync('database.json', 'utf8'))	
  
  	
  return {
    props: {
      postList,
    },
  }
}


export default function IndexPage({ postList }) {	  
//	fetch('/views', {
//      method: 'POST',
//      headers: {
//        Accept: 'application/json, text/plain, */*',
//        'Content-Type': 'application/json'
//      },
      //body: JSON.stringify({ title: post.title })
//      body: JSON.stringify({ title: "homepage" })
 //   })
 //   .then(res => res.json())
    //.then(res => console.log(res))
    /*
         const scriptURL = 'https://script.google.com/macros/s/AKfycbxgAa_1WLt4H2oZexdJYKCUrjStDHCsTZdtCl_htaEjOngwjnPjjDXiJaa24-pULflS/exec'
        
        let time = Date.now(); //timestamp('YYYY/MM/DD:mm:ss')
        
 	fetch(scriptURL, { method: 'POST',
            crossDomain: true,
             body: JSON.stringify({name:"Homepage", time: time})})*/
             
      var time = Date.now(); //timestamp('YYYY/MM/DD:mm:ss')

//console.log('test axios')

axios.post('https://sheetdb.io/api/v1/rw00c59mbwfd3',{
        "data": {"time": "value1", "title": 'Homepage', "time": time}
    })
    
    /*.then( response => {
        console.log(response.data);
    });*/
	

  return (
   <div>
   <Head>
       
    </Head>

  	
  	 <div className="container mt-5">
           <div className="row">
		    <main>
		      <Head>
			<title>Home page</title>
		      </Head>

		      <h2 className="card-title">List of posts</h2>

		      <section>
			{postList.map((post) => (
			  <Post {...post} key={post.id} />
			))}
		      </section>
		    </main>
	</div>
	</div>
    </div>
  )
}
