import React from 'react';
import './style.css';
import Form from './form';

class CommentsList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: this.loadList()
    };

    document.addEventListener('submit', ev => {
      if (ev.target.tagName === 'FORM') this.setState({list: this.loadList()});
    });
  }

  loadList() {
    const list = JSON.parse(localStorage.getItem('commentsList'));
    const noList = ['Нет комментариев.'];
    return (!list) ? noList : (list.length) ? list : noList;
  }

  toggleBtn(i, key) {
    const {list} = this.state;
    list.forEach((item, j) => {
      if (j === i) item.btn = key;
    });
    this.setState({list: list});
  }

  delItem(i) {
    const userAnswer = window.confirm('Вы действительно хотите удалить комментарий?');
    if (!userAnswer) return;

    const arr = [];
    this.state.list.forEach((item, j) => {
      if (j !== i) arr.push(item);
    });

    localStorage.removeItem('commentsList');
    localStorage.setItem('commentsList', JSON.stringify(arr));

    this.setState({list: this.loadList()});
  }

  render() {
    return (
        <ul className="comments__list">
          {
            this.state.list.map((item, i) => {
              return (typeof item === 'object') ? (
                  <li key={i}
                      className="comments__item"
                      onMouseOver={() => this.toggleBtn(i, true)}
                      onMouseOut={() => this.toggleBtn(i, false)}>
                    <div className="comments__user">
                      <h3 className="comments__name">
                        {item.name}
                      </h3>
                      <span className="comments__date">
                        {item.date}
                      </span>
                    </div>
                    <p className="comments__text">
                      {item.text}
                    </p>
                    <div className="comments__actions">
                      <button key={i} className={
                        (item.btn)
                            ? "comments__del comments__del--active"
                            : "comments__del"}
                              onClick={() => this.delItem(i)}>
                        удалить
                      </button>
                    </div>
                  </li>
              ) : (
                  <li key={i} className="comments__nothing">
                    {item}
                  </li>
              );
            })
          }
        </ul>
    )
  }
}

const Comments = () => {
  return (
      <div className="comments">
        <h2 className="comments__title">Комментарии</h2>
        <CommentsList/>
        <Form/>
      </div>
  )
}

export default Comments;