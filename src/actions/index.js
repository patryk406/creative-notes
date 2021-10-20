import { v4 as uuidv4 } from "uuid";
export const removeItem = (itemType, id) => ({
  type: "REMOVE_ITEM",
  payload: { itemType, id },
});

export const addItem = (itemType, itemContent) => {
  return {
    type: "ADD_ITEM",
    payload: {
      itemType,
      item: {
        id: uuidv4(),
        ...itemContent,
      },
    },
  };
};
