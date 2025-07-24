import { getCurrentTime } from '../../lib';

interface Props {
  dt: string;
  posts: Post[];
}
interface Post {
  id: number;
  title: string;
}

export default function Page({ dt, posts }: Props) {
  return (
    <main>
      <h1>posts</h1>
      <h4>{dt}</h4>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
            </li>
          ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  console.log('static props');
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
