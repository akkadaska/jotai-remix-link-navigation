import { useParams } from '@remix-run/react';
import { sampleAtom } from 'atom/atom';
import { ShowAtom, ShowGlobalAtom } from 'components/show-atom';
import { useHydrateAtoms } from 'jotai/utils';

export default function Page() {
  const params = useParams();
  const sampleAtomValue = params.sampleAtomValue!;
  useHydrateAtoms([[sampleAtom, sampleAtomValue]]);
  return (
    <main key={sampleAtomValue}>
      <h1 className='text-2xl'>Hydrate by useHydrateAtom with value of {sampleAtomValue}</h1>
      <ShowAtom expected={sampleAtomValue} />
      <ShowGlobalAtom />
    </main>
  );
}