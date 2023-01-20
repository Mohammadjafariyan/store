import Document,{ Html, Head, Main, NextScript } from 'next/document'

import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();


export default class _Document extends Document {
 
  static getInitialProps = getInitialProps;

  render() {return (
    <Html lang="fa" dir="rtl">
      <Head >

      <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Web site created using create-next-app" />
                <meta name="theme-color" content="#000000" />
      <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
  }
}
