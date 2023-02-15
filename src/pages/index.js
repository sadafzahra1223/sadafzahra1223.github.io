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
  
  const postList = JSON.parse(fs.readFileSync('patterns.json', 'utf8'))	
  
  	
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
                    <li class="nav-item" id="load-svg"><a class="nav-link" href="/">Patterns</a></li> 
                    <li class="nav-item" id="load-svg"><a class="nav-link" href="/portfolio">Portfolio</a></li>   
                    <li class="nav-item" id="create-svg"><a class="nav-link" href="/blog">Blog</a></li>
                      
                      <li class="nav-item" id="create-svg"><a class="nav-link" href="/contact">Contact</a></li>                       
                    </ul>
                </div>
            </div>
        </nav>
  	
  	 
		    <main>
		      <Head>
			<title>Patterns</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
		      </Head>

		      <h2 className="card-title"></h2>
              <section className="py-5">
	            <div className="container px-4 px-lg-5 mt-5">
		        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {postList.map((post) => (
                    <div className="col mb-5">
                    <div className="card h-100">
                <Post {...post} key={post.id} />
                </div>
			    </div>
                ))}
            </div>
            </div>
            </section>
		    </main>
	</div>
	
  )
}

/*
                    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                    <div class="col mb-5">
                    <div class="card h-100">
                           
                           <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        
		      </section>
*/

