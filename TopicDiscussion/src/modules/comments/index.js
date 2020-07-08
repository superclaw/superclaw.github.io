import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import Form from './form';
import {setAuthorValue, delComment, addNewComment, setTextValue, toggleBtn} from '../../actions';

const CommentsList = props => {
  const {store, delComment, toggleBtn} = props;

  return (
      <ul className="comments__list">
        {
          store.list.map((item, i) => {
            return (typeof item === 'object') ? (
                <li key={i}
                    className="comments__item"
                    onMouseOver={() => toggleBtn(i, true)}
                    onMouseOut={() => toggleBtn(i, false)}>
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
                            onClick={() => {
                              const userAnswer = window.confirm('Вы действительно хотите удалить комментарий?');
                              if (!userAnswer) return;
                              return delComment(i);
                            }}>
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
  );
}

let Comments = (props) => {
  const {
    store, setAuthorValue, setTextValue, addNewComment, delComment, toggleBtn
  } = props;

  return (
      <div className="comments">
        <h2 className="comments__title">Комментарии</h2>
        <CommentsList
            store={store}
            delComment={delComment}
            toggleBtn={toggleBtn}
        />
        <Form
            store={store}
            addNewComment={addNewComment}
            setAuthorValue={setAuthorValue}
            setTextValue={setTextValue}
        />
      </div>
  )
}

const mapStateToProps = store => {
  return {
    store: store
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAuthorValue: val => dispatch(setAuthorValue(val)),
    delComment: idx => dispatch(delComment(idx)),
    addNewComment: (author, text, date) => dispatch(addNewComment(author, text, date)),
    setTextValue: val => dispatch(setTextValue(val)),
    toggleBtn: (idx, val) => dispatch(toggleBtn(idx, val))
  }
}

Comments = connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);

export default Comments;