import Link from 'next/link';
import Image from 'next/image';

export default function Posts({ post }) {
  return (
    <div className='card'>
      <div className='card-img'>
        <Image
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.cover_image}
          layout='fill'
        />
      </div>
      <div className='card-body'>
        <div className='card-title'>{post.frontmatter.title}</div>
        <div className='card-text'>{post.frontmatter.excerpt}</div>
      </div>

      <div className='post-date'>Posted on {post.frontmatter.date}</div>
      <Link href={`/blog/${post.slug}`}>
        <a href='' className='btn'>
          test
        </a>
      </Link>
    </div>
  );
}
