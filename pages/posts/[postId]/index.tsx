import { getCurrentTime } from '@/lib';
import { GetStaticPropsContext } from 'next';

interface Props {
  id: number;
  dt: string;
  post: Post;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Page({ id, dt, post }: Props) {
  return (
    <main>
      <h1>Post {id}</h1>
      {post ? (
        <>
          <h4>{dt}</h4>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params || !context.params.postId) {
    return {
      notFound: true,
    };
  }
  const id = context.params.postId;
  const dt = getCurrentTime();
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const reply = await response.json();
  return {
    props: {
      id,
      dt,
      post: reply,
    },
  };
}
