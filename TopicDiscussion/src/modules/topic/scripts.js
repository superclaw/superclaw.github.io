import React from 'react';

const Topic = () => {
  return makeTopic(getFromServer());
}

const getFromServer = () => {
  fetch('')
      .then(response => {
        console.log(response.text());
        /*return (response.ok)
            ? response.json().then(json => json)
            : null;*/
      });
}

const makeTopic = topic => {
  return (
    <article className="topic">
      <h2 className="topic__title">{topic.title}</h2>
      {
        topic.content.map((p, i) => {
          return (
              <p key={i} className="topic__p">
                {p}
              </p>
          )
        })
      }
      <address className="topic__author">
        <span className="topic__name">{topic.details.name}</span>
        <span className="topic__date">{topic.details.date}</span>
      </address>
    </article>
  )
}

export default Topic;
