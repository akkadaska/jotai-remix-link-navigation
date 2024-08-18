import { globalAtom, sampleAtom } from 'atom/atom'
import { useAtomValue } from 'jotai'

export const ShowAtom = ({ expected }: { expected: string }) => {
  const sampleAtomValue = useAtomValue(sampleAtom)

  return (
    <>
      <p>sampleAtomValue: {sampleAtomValue}</p>
      {sampleAtomValue === expected ? (
        <p className='text-green-500'>Hydrated successfully</p>
      ) : (
        <p className='text-red-500'>Hydration error! Expected {expected} but show {sampleAtomValue}</p>
      )}
    </>
  )
}

export const ShowGlobalAtom = () => {
  const globalAtomValue = useAtomValue(globalAtom)

  return (
    <p>globalAtomValue: {globalAtomValue}</p>
  )
}