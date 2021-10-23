import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import PageContext from "context";

const MainTemplate = ({ children, ...props }) => {
  const [pageType, setPageType] = useState("ideas");

  const pageTypes = ["ideas", "creatives", "travels"];
  const {
    location: { pathname },
  } = props;
  const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
  useEffect(() => {
    setPageType(currentPage);
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};
MainTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};
export default withRouter(MainTemplate);
