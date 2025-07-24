import { getCurrentTime } from '@/lib';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Comment {
  id: number;
  body: string;
}

export default function Page() {
  const router = useRouter();
  const id = router.query.commentId;
  const [dt, setDt] = useState('');
  const [data, setData] = useState<Comment>();

  const fetchComment = () => {
    if (!id) {
      return;
    }
    fetch(`https://dummyjson.com/comments/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((reply) => {
        console.log(reply);
        setDt(getCurrentTime());
        setData(reply);
      });
  };

  useEffect(() => {
    fetchComment();
  }, [id]);

  return (
    <main>
      <h1>Comment {id}</h1>
      {data ? (
        <>
          <h4>{dt}</h4>
          <p>{data.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
