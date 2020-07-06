import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import makeTopic from './modules/topic/scripts';
import Comments from './modules/comments/scripts';

const renderMain = topic => {
  ReactDOM.render(
      <div className="wrapper">
        {topic}
        <Comments/>
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