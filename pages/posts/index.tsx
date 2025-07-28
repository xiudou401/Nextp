
import { getCurrentTime } from '@/lib';
import React from 'react';

interface Props {
  dt: string;
  posts: [];
}


interface Post {
  id: number;
  title: string;
}

export default function Page({ dt, posts }: Props) {
  return (
    <main>

      <h1>Posts</h1>
      <h4>{dt}</h4>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </main>
  );
}

export async function getStaticProps() {

  const dt = getCurrentTime();
  const response = await fetch('https://dummyjson.com/posts');
  const reply = await response.json();

  return {
    props: {
      dt,
      posts: reply.posts,
    },
  };
}
