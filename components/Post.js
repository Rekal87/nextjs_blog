import Link from 'next/link';
import Image from 'next/image';

export default function Posts({ post }) {
  return (
    <div className='card'>
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.cover_image}
        width={150}
        height={150}
      />
    </div>
  );
}
