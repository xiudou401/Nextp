import RouterButton from '@/components/RouterButton';
import { getCurrentTime } from '@/lib';
import { GetStaticPropsContext } from 'next';

interface Props {
  id: number;
  dt: string;
  post: Post;
}

interface Post {
  id: number;
  body: string;
}

export default function Page({ id, dt, post }: Props) {
  return (
    <main>
      <h1>Post {id}</h1>
      <h4>{dt}</h4>
      <RouterButton />
      <h4>{post.body}</h4>
    </main>
  );
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
  const post = await response.json();
  return {
    props: {
      id,
      dt,
      post,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: true,
  };
}
