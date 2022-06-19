import Link from 'next/link'
import Head from 'next/head'
let fs = require('fs')
const timestamp = require('time-stamp')
const axios = require('axios');

export async function getStaticPaths() {

/*
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  const postList = await response.json()*/
  
  const postList = JSON.parse(fs.readFileSync('database.json', 'utf8'))	
  
  return {
    paths: postList.map((post) => {
      return {
        params: {
          slug: `${post.slug}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

/*
  // fetch single post detail
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const post = await response.json()
  return {
    props: post,
  }
  
  console.log('test')
  */
  const postList = JSON.parse(fs.readFileSync('database.json', 'utf8'))	
  
  
  //console.log(params.slug)     

  
  //let myString = parseInt(params.id)
  
  let myString = params.slug
  var post = postList.find(o => o.slug === myString)
	
  

  return {
    props: post,
  }
  
	
}

export default function Post({ title, body }) {

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
        
        let time = timestamp('YYYY/MM/DD:mm:ss')
        
 	fetch(scriptURL, { method: 'POST',
            crossDomain: true,
             body: JSON.stringify({name: title, time: time})})*/
             
              var time = Date.now(); //timestamp('YYYY/MM/DD:mm:ss')

//console.log('test axios')

axios.post('https://sheetdb.io/api/v1/rw00c59mbwfd3',{
        "data": {"time": "value1", "title": title, "time": time}
    })
    /*.then( response => {
        console.log(response.data);
    });*/
             
        
  return (
    <main>
      <Head>
        <title >{title}</title>
        
      </Head>
      
      <div className="container mt-5">
           <div className="row">

	      <h1 className='fw-bolder mb-1'>{title}</h1>
	      
	<section className='mb-5'>

	      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      
      	</section>
      

	      <Link href="/">
		<a>Go back to home</a>
	      </Link>
	</div>
	</div>
    </main>
  )
}
