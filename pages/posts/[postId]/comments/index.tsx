import { getCurrentTime } from '@/lib';
import React, { useEffect, useState } from 'react';

interface Comment {
  id: number;
  body: string;
}

export default function Page() {
  const [dt, setDt] = useState('');
  const [data, setData] = useState<Comment[]>([]);

  const fetchComments = () => {
    fetch('https://dummyjson.com/comments')
      .then((response) => {
        return response.json();
      })
      .then((reply) => {
        console.log(reply);
        setData(reply.comments);
        setDt(getCurrentTime());
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <main>
      <h1>comments</h1>
      <h4>{dt}</h4>
      <ul>
        {data &&
          data.map((comment) => <li key={comment.id}>{comment.body}</li>)}
      </ul>
    </main>
  );
}
