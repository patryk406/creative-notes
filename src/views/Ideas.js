import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
const ideas = [
  {
    id: 1,
    title: "New Atlantis",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
    created: `${new Date().toLocaleDateString()}`,
  },
  {
    id: 2,
    title: "Guild",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
    created: `${new Date().toLocaleDateString()}`,
  },
  {
    id: 3,
    title: "Assets",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
    created: `${new Date().toLocaleDateString()}`,
  },
  {
    id: 4,
    title: "Cosmos",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
    created: `${new Date().toLocaleDateString()}`,
  },
  {
    id: 5,
    title: "Stars",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
    created: `${new Date().toLocaleDateString()}`,
  },
  {
    id: 6,
    title: "Locations",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
    created: `${new Date().toLocaleDateString()}`,
  },
];
const Ideas = () => {
  return (
    <GridTemplate pageType="ideas">
      {ideas.map(({ title, content, created, id }) => (
        <Card
          id={id}
          cardType="ideas"
          title={title}
          content={content}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};

export default Ideas;
