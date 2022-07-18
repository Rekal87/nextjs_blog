import Head from 'next/head';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Post from '../components/Post';

export default function HomePage({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Nextjs Markdown Blog</title>
      </Head>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // fs reads from root level, so we can go directly in to posts
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
