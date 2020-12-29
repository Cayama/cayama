import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../redux/store/index';

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
  },
  fontFamily: {
    button: 'Montserrat sans-serif'
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    width: 100%;
    background-color: ${theme.colors.background};
  }

  body , input , button , textarea, a {
    color: ${theme.colors.primary};
    font: ${theme.colors.font1};
  }

  main {
    margin-top: 23%;
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
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}
