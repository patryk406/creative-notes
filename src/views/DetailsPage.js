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
      default:
        console.log("something went wrong");
    }
  }, [match.path]);

  const dummyTravel = {
    id: 5,
    title: "Stars",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
    created: `${new Date().toLocaleDateString()}`,
    travelName: "Osma",
  };
  return (
    <DetailsTemplate
      pageType={pageType}
      title={dummyTravel.title}
      content={dummyTravel.content}
      id={dummyTravel.id}
      created={dummyTravel.created}
      travelName={dummyTravel.travelName}
      key={dummyTravel.id}
    />
  );
};

export default DetailsPage;
