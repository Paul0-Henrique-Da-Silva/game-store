import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Game Store</title>
                <link rel="short icon" href="/img/icon-512.png"/>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
  }

export default App  
