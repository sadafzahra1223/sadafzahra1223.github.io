import Link from 'next/link'

export default function Post({ title, description, id, slug, date }) {
  return (
			<div>
			<img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />	
	        <div class="card-body">
			<div className="text-center">
	            <h2 class="card-title h4">{title}</h2>
	            <br></br>
	            <Link href={`/${slug}`}>
	            	<a class="btn btn-primary" href={`/${slug}`}>View →</a>
      		    </Link>
	        </div>
	        </div>
            </div>
			
  )
}




/*<p class="card-text" dangerouslySetInnerHTML={{ __html: description }}></p>*/




