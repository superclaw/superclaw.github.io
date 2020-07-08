export const setAuthorValue = val => {
  return {
    type: 'SET_AUTHOR_VALUE',
    val
  }
}

export const setTextValue = val => {
  return {
    type: 'SET_TEXT_VALUE',
    val
  }
}

export const addNewComment = (author, text, date) => {
  return {
    type: 'ADD_NEW_COMMENT',
    author,
    text,
    date
  }
}

export const delComment = idx => {
  return {
    type: 'DEL_COMMENT',
    idx
  }
}

export const toggleBtn = (idx, val) => {
  return {
    type: 'TOGGLE_BTN',
    idx,
    val
  }
}