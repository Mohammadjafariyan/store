import '@/styles/globals.css'
import '@/styles/assets/bootstrap.css'
import '@/styles/assets/mega-menu.css'
import '@/styles/theme.css'
import '@/styles/assets/sample.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
/* import 'primereact/resources/themes/saga-blue/theme.css'; */
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import 'primeflex/primeflex.css';
import { useEffect } from 'react'
import { wrapper } from '@/components/abstract/root-redux-store'



 function App({ Component, pageProps }: AppProps) {

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


export default wrapper.withRedux(App);