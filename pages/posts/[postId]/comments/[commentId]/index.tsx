import { useRouter } from 'next/router';
import React from 'react';

export default function Page() {
  const router = useRouter();
  const id = router.query.commentId;
  if (!id) {
    return;
  }
  return (
    <main>
      <h1>Comment {id}</h1>
    </main>
  );
}
