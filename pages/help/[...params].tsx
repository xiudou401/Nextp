import { useRouter } from 'next/router';


export default function Page() {
  const router = useRouter();
  const params = router.query.params;
  return (
    <main>

      <h1>Help {Array.isArray(params) && params?.join?.(' ')}</h1>

    </main>
  );
}
