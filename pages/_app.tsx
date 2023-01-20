import '@/styles/globals.css'
import '@/styles/assets/bootstrap.css'
import '@/styles/assets/mega-menu.css'
import '@/styles/assets/sample.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import 'primeflex/primeflex.css';
import { useEffect } from 'react'



export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    import("@/styles/assets/bootstrap.js");
  },[])
  
  
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
  // return <Component {...pageProps} />
}
