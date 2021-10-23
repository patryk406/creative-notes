import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILED,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILED,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_FAILED,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from "actions";
const initialState = {
  userID: "6173f27035150e6d489d6372",
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.data,
        ],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            (item) => item._id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};

export default notesReducer;
