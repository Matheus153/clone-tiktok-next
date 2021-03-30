import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'sofiapro';
    src: url('/sofiapro.ttf') format('truetype');
  }

  html, body {
    font-family: sofiapro;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#fe2c55',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Clone TikTok</title>
          <link rel="icon" href="/images/logoIcon.png" />
        </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
