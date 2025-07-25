import { useRouter } from 'next/router';
import React from 'react';

export default function Page() {
  const router = useRouter();
  const params = router.query.params;
  return (
    <main>
      <h1>Help page {Array.isArray(params) && params?.join?.(' ')}</h1>
    </main>
  );
}
