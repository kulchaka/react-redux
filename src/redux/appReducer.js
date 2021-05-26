import {HIDE_ALERT_ERROR, HIDE_LOADER, SHOW_ALERT_ERROR, SHOW_LOADER} from "./types";

const initState = {
  loading: false,
  alert: null
}

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case SHOW_ALERT_ERROR:
      return {...state, alert: action.payload}
    case HIDE_ALERT_ERROR:
      return {...state, alert: null}
    default: return state
  }
}
