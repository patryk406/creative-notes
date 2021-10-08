import { ThemeProvider } from 'styled-components';
import Card from 'components/molecules/Card/Card'
import GlobalStyle from 'theme/GlobalStyle'
import {theme} from 'theme/mainTheme'

const Root=()=> {
  return (
    <div className="App">
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <>
<Card/>
      </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
