const initialState = {
  ideas: [
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
  ],
  travels: [
    {
      id: 1,
      title: "New Atlantis",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
      created: `${new Date().toLocaleDateString()}`,
      travelName: "Seth",
    },
    {
      id: 2,
      title: "Guild",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
      created: `${new Date().toLocaleDateString()}`,
      travelName: "Merph",
    },
    {
      id: 3,
      title: "Assets",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
      created: `${new Date().toLocaleDateString()}`,
      travelName: "Nereth",
    },
    {
      id: 4,
      title: "Cosmos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
      created: `${new Date().toLocaleDateString()}`,
      travelName: "Merph",
    },
    {
      id: 5,
      title: "Stars",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
      created: `${new Date().toLocaleDateString()}`,
      travelName: "Osma",
    },
    {
      id: 6,
      title: "Locations",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis mi mollis aliquet fringilla. Sed pulvinar vel ex sed facilisis. Vestibulum eu nunc sed sem lacinia tempus. Phasellus ac condimentum purus. Sed fermentum venenatis nisl. Morbi hendrerit justo sollicitudin erat aliquet sodales. Vivamus augue augue, mattis eget nunc et, ultricies suscipit elit. Aliquam sed condimentum odio. Nulla elit est, sodales sodales eleifend at, congue sed eros. Duis at sagittis massa.",
      created: `${new Date().toLocaleDateString()}`,
      travelName: "Seth",
    },
  ],
  creatives: [
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
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            (item) => item.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;