import Link from 'next/link'

export default function Post({ title, description, id, slug, date }) {
  return (
  
  		
	    <div class="card mb-4">
	       
	        <div class="card-body">
	            <div class="small text-muted" dangerouslySetInnerHTML={{ __html: date }}></div>
	            <h2 class="card-title h4">{title}</h2>
	            <p class="card-text" dangerouslySetInnerHTML={{ __html: description }}></p>
	            <Link href={`/portfolio/${slug}`}>
	            	<a class="btn btn-primary" href={`/portfolio/${slug}`}>View →</a>
      		    </Link>
	            
	        </div>
            </div>
 
  )
}
