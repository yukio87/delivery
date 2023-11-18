import { getMenu as getProducts } from "../../services/apiDelivery";

const initialState = {
  menu: [],
  error: null,
  isLoading: false,
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case "menu/updateMenu": {
      return { ...state, menu: action.payload, error: null, isLoading: false };
    }
    case "menu/addDownloadingFailure": {
      return { ...state, error: action.payload, isLoading: false };
    }
    case "menu/downloading": {
      return { ...state, isLoading: true };
    }

    default:
      return state;
  }
}

/////////////////////////////////////////////////////////////////////////

export function updateMenu() {
  return async function (dispatch) {
    dispatch({ type: "menu/downloading" });
    try {
      const menu = await getProducts();
      dispatch({ type: "menu/updateMenu", payload: [...menu] });
    } catch (err) {
      dispatch({ type: "menu/addDownloadingFailure", payload: err });
    }
  };
}

/////////////////////////////////////////////////////////////////////////

export function getMenu(store) {
  return store.menu.menu;
}

export function getErrorMenu(store) {
  return store.menu.error;
}

export function getIsloading(store) {
  return store.menu.isLoading;
}
