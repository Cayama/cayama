import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#EAEDED',
    boxBase: '#FFFFFF',
    boxFooter: '#FAFAFC',
    borderColor: '#DAE0E3',
    inputBackground: 'rgba(0,0,0,.16)',
    inputTextColor: '#2a2a2a',
    font1: 'Montserrat',
    lineInWhite: '#E6E6F0',
    primaryLight: '#1A8FE3',
    primary: '#020887',
    primaryDark: '#01295F',
    primaryDarker: '#031D44',
    secundaryLight: '#EDAE49',
    secundary: '#FF9914',
    secundaryDark: '#D64933',
    secundaryDarker: '#BF3100',
    titleInPrimary: '#FFFFFF',
    textInPrimary: '#D4C2FF',
    textTitle: '#32264D',
    textComplement: '#9C98A6',
    textBase: '#393838',
    // font2: 500 1.5rem 'Montserrat', sans-serif,
  },
};

const GlobalStyle = createGlobalStyle`
  html, body {
    border: 0;
    box-sizing: border-box;
    height: 100vh;
    margin: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.background};
  }

  body , input , button , textarea, a {
    color: ${theme.colors.primary};
    font: ${theme.colors.font1};
  }

  .container {
    width: 700px;
  }

  @media ( min-width : 700px ) {

    html, body  {
      font-size: 62.5%;
    }

    .container {
      width: 100%;
    }
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}