import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import './index.css';
import makeTopic from './modules/topic';
import Comments from './modules/comments';

export const loadList = () => {
  const list = JSON.parse(localStorage.getItem('commentsList'));
  const noList = ['Нет комментариев.'];
  return (!list) ? noList : (list.length) ? list : noList;
}

const initState = {
  list: loadList(),
  add: {author: '', text: ''}
}

const store = createStore(reducer, initState);

const renderMain = topic => {
  ReactDOM.render(
      <div className="wrapper">
        {topic}
        <Comments store={store} />
      </div>,
      document.querySelector('.main')
  )
}

const getData = () => {
  fetch('https://maxkiner.github.io/server/topic.json')
      .then(response => {
        (response.ok)
            ? response.json().then(json => renderMain(makeTopic(json)))
            : renderMain(makeTopic(null));
      });
}

getData();