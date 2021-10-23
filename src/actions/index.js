import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILED = "ADD_ITEM_FAILED";

export const REMOVE_ITEM_REQUEST = "REMOVE_ITEM_REQUEST";
export const REMOVE_ITEM_SUCCESS = "REMOVE_ITEM_SUCCESS";
export const REMOVE_ITEM_FAILED = "REMOVE_ITEM_FAILED";

export const AUTHENTICATE_REQUEST = "AUTHENTICATE_REQUEST";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAILED = "AUTHENTICATE_FAILED";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const removeItem = (itemType, id) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM_REQUEST });
  axios
    .delete(`http://localhost:9000/api/note/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          itemType,
          id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REMOVE_ITEM_FAILED });
    });
};

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post("http://localhost:9000/api/note", {
      userID: getState().userID,
      type: itemType,
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({ type: ADD_ITEM_SUCCESS, payload: { itemType, data } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILED });
    });
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTHENTICATE_REQUEST });
  return axios
    .post("http://localhost:9000/api/user/login", {
      username,
      password,
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: AUTHENTICATE_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTHENTICATE_FAILED });
    });
};

export const fetchItems = (itemType) => (dispatch, getState) => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get("http://localhost:9000/api/notes/type", {
      params: {
        type: itemType,
        userID: getState().userID,
      },
    })
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILED });
    });
};
