import {CREATE_POST, FETCH_POSTS, HIDE_ALERT_ERROR, HIDE_LOADER, SHOW_ALERT_ERROR, SHOW_LOADER} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlertError(text) {
  return {
    type: SHOW_ALERT_ERROR,
    payload: text
  }
}

export function hideAlertError() {
  return {
    type: HIDE_ALERT_ERROR
  }
}

export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch('ttps://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      dispatch({type: FETCH_POSTS, payload: json})
      dispatch(hideLoader())
    }
    catch (e) {
      dispatch(showAlertError('Server Not Found 404'))
      dispatch(hideLoader())
    }

  }
}

