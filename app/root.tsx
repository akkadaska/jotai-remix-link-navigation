import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { HydrationBoundary, RenderingBoundary } from 'jotai-ssr';
import { globalAtom } from 'atom/atom';

export const loader = () => {
  return new Date().toLocaleString();
};

export function Layout({ children }: { children: React.ReactNode }) {
  const date = useLoaderData<string>();
  return (
    
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      <RenderingBoundary>
        <HydrationBoundary hydrateAtoms={[[globalAtom, date]]}>
          <Link to="/use-hydrate-atom/a"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/use-hydrate-atom/a</span></Link>
          <Link to="/use-hydrate-atom/b"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/use-hydrate-atom/b</span></Link>
          <Link to="/hydration-boundary/m"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary/m</span></Link>
          <Link to="/hydration-boundary/n"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary/n</span></Link>
          <Link to="/hydration-boundary-with-rendering-boundary/x"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary-with-rendering-boundary/x</span></Link>
          <Link to="/hydration-boundary-with-rendering-boundary/y"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary-with-rendering-boundary/y</span></Link>
          {children}
          <ScrollRestoration />
          <Scripts />
        </HydrationBoundary>
      </RenderingBoundary>
    </body>
  </html>
      
    
  );
}

export default function App() {
  return <Outlet />;
}
