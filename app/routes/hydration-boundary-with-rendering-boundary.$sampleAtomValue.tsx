import { useParams } from '@remix-run/react';
import { sampleAtom } from 'atom/atom';
import { ShowAtom, ShowGlobalAtom } from 'components/show-atom';
import { HydrationBoundary, RenderingBoundary } from 'jotai-ssr';

export default function Page() {
  const params = useParams();
  const sampleAtomValue = params.sampleAtomValue!;
  return (
    <RenderingBoundary key={sampleAtomValue} performanceImpactingUseUpperStore>
      <HydrationBoundary hydrateAtoms={[[sampleAtom, sampleAtomValue]]}>
        <main>
          <h1 className='text-2xl'>Hydrate by HydrationBoundary with value of {sampleAtomValue} within RenderingBoundary</h1>
          <ShowAtom expected={sampleAtomValue} />
          <ShowGlobalAtom />
        </main>
      </HydrationBoundary>
    </RenderingBoundary>
    
  );
}