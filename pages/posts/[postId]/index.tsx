import { getCurrentTime } from '@/lib';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Page() {
  const router = useRouter();
  const id = router.query.postId;

  const [dt, setDt] = useState('');
  const [data, setData] = useState<Post | null>(null);

  const fetchPost = () => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((reply) => {
        console.log(reply);
        setData(reply);
        setDt(getCurrentTime());
      });
  };

  useEffect(() => {
    if (!id) return;
    fetchPost();
  }, [id]);

  return (
    <main>
      <h1>Post {id}</h1>
      {data ? (
        <>
          <h4>{dt}</h4>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
