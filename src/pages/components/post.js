import Link from 'next/link'

export default function Post({ title, description, id, slug }) {
  return (
  
  		
	    <div class="card mb-4">
	       
	        <div class="card-body">
	            <div class="small text-muted">January 1, 2022</div>
	            <h2 class="card-title h4">{title}</h2>
	            <p class="card-text" dangerouslySetInnerHTML={{ __html: description }}></p>
	            <Link href={`/blog/${slug}`}>
	            	<a class="btn btn-primary" href={`/blog/${slug}`}>Read more →</a>
      		    </Link>
	            
	        </div>
            </div>
 
  )
}