import { useRouter } from 'next/router';
import React from 'react';

export default function Page() {
  const router = useRouter();
  const id = router.query.postId;

  if (!id) return null;

  return (
    <main>
      <h1>Post {id}</h1>
    </main>
  );
}
