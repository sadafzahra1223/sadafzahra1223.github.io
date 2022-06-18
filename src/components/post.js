import Link from 'next/link'

export default function Post({ title, description, id, slug }) {
  return (
    <div class="card mb-4">
      <h2 className="card-title h4">{title}</h2>
      <p>{description}</p>
      <Link href={`/${slug}`}>
        <a>Read more...</a>	
      </Link>
    </div>
  )
}
