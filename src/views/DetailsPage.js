import { useState, useEffect } from "react";
import DetailsTemplate from "templates/DetailsTemplate";
import { routes } from "routes";
const DetailsPage = ({ match }) => {
  const [pageType, setPageType] = useState("ideas");

  useEffect(() => {
    switch (match.path) {
      case routes.idea:
        setPageType("ideas");
        break;
      case routes.travel:
        setPageType("travels");
        break;
      case routes.creative:
        setPageType("creatives");
        break;
    }
  }, [match.path]);

  return (
    <DetailsTemplate pageType={pageType}>
      <>{pageType}</>
    </DetailsTemplate>
  );
};

export default DetailsPage;
