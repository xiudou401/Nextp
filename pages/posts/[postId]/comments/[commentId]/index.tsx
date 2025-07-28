
import { useRouter } from 'next/router';
import React from 'react';

export default function Page() {
  const router = useRouter();
  const cid = router.query.commentId;
  const pid = router.query.postId;
  return (
    <main>
      <h1>
        Comment {pid} {cid}
      </h1>

    </main>
  );
}
