import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import theme from 'theme';
import 'theme/index.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>edgar.care</title>
      <meta
          name="description"
          content=""
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/assets/edgar.care-logo-tabs.svg" />
    </Head>
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
)

export default App
