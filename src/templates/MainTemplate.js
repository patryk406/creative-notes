import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import PageContext from "context";

import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";

const MainTemplate = ({ children, ...props }) => {
  const [pageType, setPageType] = useState("ideas");
  const pageTypes = ["ideas", "creatives", "travels"];
  const {
    location: { pathname },
  } = props;
  const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
  useEffect(() => {
    setPageType(currentPage);
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
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
};

export default withRouter(MainTemplate);
