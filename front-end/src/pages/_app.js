import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
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

const materialUiTheme = createMuiTheme(theme);

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    background-color: ${theme.colors.background};
  }

  body , input , button , textarea, a {
    color: ${theme.colors.primary};
    font: ${theme.colors.font1};
  }

  main {
    margin-top: 12vh;
  }

  header {
    z-index: 20;
  }

  h1 {
    /* Extra small devices (phones, less than 768px) */
    font-size: 30px;

    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
      font-size: 40px;
    }

    /* Medium devices (desktops, 992px and up) */
    @media (min-width: 992px) {
      font-size: 40px;
    }

    /* Large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
      font-size: 40px;
    }
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
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <MaterialThemeProvider theme={materialUiTheme}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </MaterialThemeProvider>
      </>
    )
  }
}
