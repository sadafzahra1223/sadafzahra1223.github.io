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
  
  const postList = JSON.parse(fs.readFileSync('portfolio.json', 'utf8'))	
  
  	
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
             
      //var time = Date.now(); //timestamp('YYYY/MM/DD:mm:ss')

//console.log('test axios')

let time = timestamp('YYYY/MM/DD:mm:ss')
        

axios.post('https://sheetdb.io/api/v1/rw00c59mbwfd3',{
        "data": {"time": "value1", "title": 'Homepage', "time": time}
    })
    
    /*.then( response => {
        console.log(response.data);
    });*/
	

  return (
   <div>

	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Sadaf Zahra</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item" id="load-svg"><a class="nav-link" href="/patterns">Patterns</a></li> 
                    <li class="nav-item" id="load-svg"><a class="nav-link" href="/">Portfolio</a></li>   
                    <li class="nav-item" id="create-svg"><a class="nav-link" href="/blog">Blog</a></li>                      
                    <li class="nav-item" id="create-svg"><a class="nav-link" href="/contact">Contact</a></li>                     
                    </ul>
                </div>
            </div>
        </nav>
  	
  	 <div className="container mt-5">
     <div class="col-lg-6">
           <div className="row">
		    <main>
		      <Head>
			<title>Portfolio</title>
		      </Head>

		      <h2 className="card-title"></h2>

		      <section>
			{postList.map((post) => (
			  <Post {...post} key={post.id} />
			))}
		      </section>
		    </main>
	</div>
  </div>
	</div>
    </div>
  )
}
