import Link from 'next/link'

export default function Post({ title, description, id, slug, date }) {
  return (
  
  		
	    <div class="card mb-4">
	       
	        <div class="card-body">
	            <div class="small text-muted" dangerouslySetInnerHTML={{ __html: date }}></div>
	            <h2 class="card-title h4">{title}</h2>
	            <p class="card-text" dangerouslySetInnerHTML={{ __html: description }}></p>
	            <Link href={`/${slug}`}>
	            	<a class="btn btn-primary" href={`/${slug}`}>View →</a>
      		    </Link>
	            
	        </div>
            </div>
 
  )
}




/*
 <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <div className="col mb-5">
                    <div className="card h-100">
                           
                           <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                       </div>
                    </div>

 
                </div>
            </div>
        
	</section>*/




