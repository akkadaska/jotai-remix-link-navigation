import { useParams } from '@remix-run/react';
import { sampleAtom } from 'atom/atom';
import { ShowAtom, ShowGlobalAtom } from 'components/show-atom';
import { HydrationBoundary } from 'jotai-ssr';
import { Fragment } from 'react/jsx-runtime';

export default function Page() {
  const params = useParams();
  const sampleAtomValue = params.sampleAtomValue!;
  return (
    <Fragment key={sampleAtomValue}>
      <HydrationBoundary hydrateAtoms={[[sampleAtom, sampleAtomValue]]}>
        <main>
          <h1 className='text-2xl'>Hydrate by HydrationBoundary with value of {sampleAtomValue}</h1>
          <ShowAtom expected={sampleAtomValue} />
          <ShowGlobalAtom />
        </main>
      </HydrationBoundary>
    </Fragment>
  );
}