import React from 'react';

interface Props {
  dt: string;
}

export default function Page({ dt }: Props) {
  return (
    <main>
      <h1>Comments</h1>
      <h4>{dt}</h4>
    </main>
  );
}
