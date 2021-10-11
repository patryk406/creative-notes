import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Card from "components/molecules/Card/Card";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplate;
