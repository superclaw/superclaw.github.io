import {loadList} from '../index';

const setValue = (store, {val}, type) => {
  const newStore = {...store};

  newStore.add[type] = val;

  return newStore;
}

const addComment = (store, {author, text, date}) => {
  const newStore = {...store};
  const arr = (localStorage.getItem('commentsList'))
      ? JSON.parse(localStorage.getItem('commentsList'))
      : [];

  arr.push({
    name: author,
    text: text,
    date: date,
    btn: false
  });

  localStorage.removeItem('commentsList');
  localStorage.setItem('commentsList', JSON.stringify(arr));

  newStore.add.author = '';
  newStore.add.text = '';

  newStore.list = loadList();
  return newStore;
}

const delComment = (store, {idx}) => {
  const newStore = {...store};
  const arr = [];

  newStore.list.forEach((item, i) => {
    if (i !== idx) arr.push(item);
  });

  localStorage.removeItem('commentsList');
  localStorage.setItem('commentsList', JSON.stringify(arr));

  newStore.list = loadList();

  return newStore;
}

const toggleBtn = (store, {idx, val}) => {
  const newStore = {...store};
  newStore.list[idx].btn = val;
  return newStore;
}

const reducer = (store, action) => {
  switch (action.type) {
    case 'SET_AUTHOR_VALUE': return setValue(store, action, 'author');
    case 'SET_TEXT_VALUE': return setValue(store, action, 'text');
    case 'ADD_NEW_COMMENT': return addComment(store, action);
    case 'DEL_COMMENT': return delComment(store, action);
    case 'TOGGLE_BTN': return toggleBtn(store, action);
    default: return store;
  }
}

export default reducer;